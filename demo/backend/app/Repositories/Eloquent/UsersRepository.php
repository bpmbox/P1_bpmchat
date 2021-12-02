<?php

namespace App\Repositories\Eloquent;

use App\Models\Users;

use App\Repositories\UsersRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class UsersRepository extends BaseRepository implements UsersRepositoryInterface
{
    public function __construct(Users $model)
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
        
        $query->with('avatar');

        if (isset($params['filter'])) {
            $filter = $params['filter'];
        
            if (isset($filter['firstName'])) {
                $query->where('firstName', 'like', '%'.$filter['firstName'].'%');
            }
        
            if (isset($filter['lastName'])) {
                $query->where('lastName', 'like', '%'.$filter['lastName'].'%');
            }
        
            if (isset($filter['phoneNumber'])) {
                $query->where('phoneNumber', 'like', '%'.$filter['phoneNumber'].'%');
            }
        
            if (isset($filter['email'])) {
                $query->where('email', 'like', '%'.$filter['email'].'%');
            }
        
            if (isset($filter['password'])) {
                $query->where('password', 'like', '%'.$filter['password'].'%');
            }
        
            if (isset($filter['emailVerificationToken'])) {
                $query->where('emailVerificationToken', 'like', '%'.$filter['emailVerificationToken'].'%');
            }
        
            if (isset($filter['passwordResetToken'])) {
                $query->where('passwordResetToken', 'like', '%'.$filter['passwordResetToken'].'%');
            }
        
            if (isset($filter['provider'])) {
                $query->where('provider', 'like', '%'.$filter['provider'].'%');
            }
        
            if (isset($filter['emailVerificationTokenExpiresAtRange'])) {
                [$start, $end] = $filter['emailVerificationTokenExpiresAtRange'];

                if (!empty($start)) {
                    $query->where('emailVerificationTokenExpiresAt', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('emailVerificationTokenExpiresAt', '<=', $end);
                }
            }
        
            if (isset($filter['passwordResetTokenExpiresAtRange'])) {
                [$start, $end] = $filter['passwordResetTokenExpiresAtRange'];

                if (!empty($start)) {
                    $query->where('passwordResetTokenExpiresAt', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('passwordResetTokenExpiresAt', '<=', $end);
                }
            }
        

            if (isset($filter['active'])) {
                $query->where('active', $params['active']);
            }
        
            if (isset($filter['role'])) {
                $query->where('role', $filter['role']);
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
            $users = Users::create([
                    'firstName' => $attributes['firstName'] ?? null,
                    'lastName' => $attributes['lastName'] ?? null,
                    'phoneNumber' => $attributes['phoneNumber'] ?? null,
                    'email' => $attributes['email'] ?? null,
                    'role' => $attributes['role'] ?? 'user',
                    'disabled' => $attributes['disabled'] ?? false,
                    'password' => $attributes['password'] ?? null,
                    'emailVerified' => $attributes['emailVerified'] ?? false,
                    'emailVerificationToken' => $attributes['emailVerificationToken'] ?? null,
                    'emailVerificationTokenExpiresAt' => $attributes['emailVerificationTokenExpiresAt'] ?? null,
                    'passwordResetToken' => $attributes['passwordResetToken'] ?? null,
                    'passwordResetTokenExpiresAt' => $attributes['passwordResetTokenExpiresAt'] ?? null,
                    'provider' => $attributes['provider'] ?? null,
                    'created_by_user' => $currentUser->id
                ]);


            if (isset($attributes['avatar'])) {
                foreach ($attributes['avatar'] as &$item) {
                    if (isset($item['new'])) {
                        unset($item['new']);
                        $item['belongsTo_column'] = 'avatar';
                        $users->avatar()->create($item);
                    }
                }
            }


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
            $users = Users::find($id);
            $users->update([
                    'firstName' => $attributes['firstName'] ?? null,
                    'lastName' => $attributes['lastName'] ?? null,
                    'phoneNumber' => $attributes['phoneNumber'] ?? null,
                    'email' => $attributes['email'] ?? null,
                    'role' => $attributes['role'] ?? 'user',
                    'disabled' => $attributes['disabled'] ?? false,
                    'password' => $attributes['password'] ?? null,
                    'emailVerified' => $attributes['emailVerified'] ?? false,
                    'emailVerificationToken' => $attributes['emailVerificationToken'] ?? null,
                    'emailVerificationTokenExpiresAt' => $attributes['emailVerificationTokenExpiresAt'] ?? null,
                    'passwordResetToken' => $attributes['passwordResetToken'] ?? null,
                    'passwordResetTokenExpiresAt' => $attributes['passwordResetTokenExpiresAt'] ?? null,
                    'provider' => $attributes['provider'] ?? null,
                    'updated_by_user' => $currentUser->id
                ]);

            if (isset($attributes['avatar'])) {
                foreach ($attributes['avatar'] as &$item) {
                    if (isset($item['new'])) {
                        unset($item['new']);
                        $item['belongsTo_column'] = 'avatar';
                        $users->avatar()->create($item);
                    }
                }
            }

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
            ->with('avatar')
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'firstName as label');

        if (isset($params['query'])) {
            $query->where('firstName', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('firstName', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

    
