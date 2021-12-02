<?php

namespace App\Repositories;

interface EloquentRepositoryInterface
{
    public function create(array $attributes, $currentUser);

    public function update($id, array $attributes, $currentUser);

    public function destroy($id);

    public function findById($id);

    public function findAll(array $params);

}
