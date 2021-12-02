<?php

namespace App\Repositories\Eloquent;

use App\Models\Table_4;

use App\Repositories\Table_4RepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Table_4Repository extends BaseRepository implements Table_4RepositoryInterface
{
    public function __construct(Table_4 $model)
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
        

        if (isset($params['filter'])) {
            $filter = $params['filter'];
        
            if (isset($filter['newColumn'])) {
                $query->where('newColumn', 'like', '%'.$filter['newColumn'].'%');
            }
        
            if (isset($filter['tettt'])) {
                $query->where('tettt', 'like', '%'.$filter['tettt'].'%');
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
            $table_4 = Table_4::create([
                    'newColumn' => $attributes['newColumn'] ?? null,
                    'tettt' => $attributes['tettt'] ?? null,
                    'created_by_user' => $currentUser->id
                ]);



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
            $table_4 = Table_4::find($id);
            $table_4->update([
                    'newColumn' => $attributes['newColumn'] ?? null,
                    'tettt' => $attributes['tettt'] ?? null,
                    'updated_by_user' => $currentUser->id
                ]);

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
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'newColumn as label');

        if (isset($params['query'])) {
            $query->where('newColumn', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('newColumn', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

    
