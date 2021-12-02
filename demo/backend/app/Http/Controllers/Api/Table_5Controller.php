<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\Table_5RepositoryInterface;

class Table_5Controller extends Controller
{
    protected Table_5RepositoryInterface $table_5Repository;
    protected Request $request;

    public function __construct(Table_5RepositoryInterface $table_5Repository, Request $request)
    {
        $this->table_5Repository = $table_5Repository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->table_5Repository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->table_5Repository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->table_5Repository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->table_5Repository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->table_5Repository->destroy($id);

        return response()->json(true, 204);
    }
    

    public function findAllAutocomplete()
    {
        $payload = $this->table_5Repository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

