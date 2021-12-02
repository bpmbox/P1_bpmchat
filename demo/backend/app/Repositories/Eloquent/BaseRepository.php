<?php

namespace App\Repositories\Eloquent;

use App\Repositories\EloquentRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseRepository implements EloquentRepositoryInterface
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function findAll($params)
    {
        //
    }

    public function create(array $attributes, $currentUser)
    {
        //
    }

    public function update($id, array $attributes, $currentUser)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function findById($id)
    {
        //
    }
}
