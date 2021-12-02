<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\Table_4RepositoryInterface;

class Table_4Controller extends Controller
{
    protected Table_4RepositoryInterface $table_4Repository;
    protected Request $request;

    public function __construct(Table_4RepositoryInterface $table_4Repository, Request $request)
    {
        $this->table_4Repository = $table_4Repository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->table_4Repository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->table_4Repository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->table_4Repository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->table_4Repository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->table_4Repository->destroy($id);

        return response()->json(true, 204);
    }
    

    public function findAllAutocomplete()
    {
        $payload = $this->table_4Repository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

