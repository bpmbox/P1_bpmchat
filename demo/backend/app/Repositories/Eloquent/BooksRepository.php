<?php

namespace App\Repositories\Eloquent;

use App\Models\Books;
use App\Models\Users;
use App\Models\Tags;

use App\Repositories\BooksRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class BooksRepository extends BaseRepository implements BooksRepositoryInterface
{
    public function __construct(Books $model)
    {
        parent::__construct($model);
    }

    public function findAll($params) : array
    {
        $limit = 0;
        $offset = 0;
        $orderBy = null;

        $query = $this->model->newModelQuery();
        //$query->select("*", "product as prod_id");
        
        $query->with('author');
        $query->with('tags');

        if (isset($params['filter'])) {
            $filter = $params['filter'];
        
            if (isset($filter['title'])) {
                $query->where('title', 'like', '%'.$filter['title'].'%');
            }
        

            if (isset($filter['active'])) {
                $query->where('active', $params['active']);
            }
        

            if (isset($filter['createdAtRange'])) {
                [$start, $end] = $filter['createdAtRange'];

                if (!empty($start)) {
                    $query->where('created_at', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('created_at', '<=', $end);
                }
            }
        }

        if ($limit) {
            $query->limit($limit);
        }

        $rows = $query->get();

        return [
            'rows' => $rows->toArray(),
            'count' => $rows->count(),
        ];
    }

    public function create(array $attributes, $currentUser)
    {
        try {
            $attributes = $attributes['data'];
            DB::beginTransaction();
            $attributes['created_by_user'] = $currentUser->id;
            $books = Books::create([
                    'title' => $attributes['title'] ?? null,
                    'author' => $attributes['author'] ?? null,
                    'created_by_user' => $currentUser->id
                ]);


            $tags = Tags::find($attributes['tags']);
            $books->tags()->sync($tags);


            DB::commit();

            return [];
        } catch (Exception $exception) {
            DB::rollback();
        }
    }

    public function update($id, array $attributes, $currentUser)
    {
        try {
            $attributes = $attributes['data'];
            DB::beginTransaction();
            $books = Books::find($id);
            $books->update([
                    'title' => $attributes['title'] ?? null,
                    'author' => $attributes['author'] ?? null,
                    'updated_by_user' => $currentUser->id
                ]);

            $tags = Tags::find($attributes['tags']);
            $books->tags()->sync($tags);

            DB::commit();

            return [];
        } catch (Exception $exception) {
            DB::rollback();
        }
    }

    public function destroy($id)
    {
        return $this->model->destroy($id);
    }

    public function findById($id)
    {
        $query = $this->model->newModelQuery();

        $query
            ->with('author')
            ->with('tags')
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'title as label');

        if (isset($params['query'])) {
            $query->where('title', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('title', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

    
