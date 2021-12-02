<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\TagsRepositoryInterface;

class TagsController extends Controller
{
    protected TagsRepositoryInterface $tagsRepository;
    protected Request $request;

    public function __construct(TagsRepositoryInterface $tagsRepository, Request $request)
    {
        $this->tagsRepository = $tagsRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->tagsRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->tagsRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->tagsRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->tagsRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->tagsRepository->destroy($id);

        return response()->json(true, 204);
    }
    

    public function findAllAutocomplete()
    {
        $payload = $this->tagsRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

