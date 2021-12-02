<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\BooksRepositoryInterface;

class BooksController extends Controller
{
    protected BooksRepositoryInterface $booksRepository;
    protected Request $request;

    public function __construct(BooksRepositoryInterface $booksRepository, Request $request)
    {
        $this->booksRepository = $booksRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->booksRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->booksRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->booksRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->booksRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->booksRepository->destroy($id);

        return response()->json(true, 204);
    }
    

    public function findAllAutocomplete()
    {
        $payload = $this->booksRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

