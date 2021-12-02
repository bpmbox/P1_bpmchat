<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\FilesRepositoryInterface;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Config\Repository;

class FilesController extends Controller
{
    protected FilesRepositoryInterface $FilesRepository;

    protected Request $request;

    public function __construct(FilesRepositoryInterface $FilesRepository, Repository $config)
    {
        $this->FilesRepository = $FilesRepository;
        $this->config = $config;
    }

    public function index()
    {
        $payload = $this->FilesRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->FilesRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->FilesRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->FilesRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->FilesRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->FilesRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }

    public function download(Request $request) {
        return response()->download(storage_path('app/files/' . $request['privateUrl']));
    }

    public function uploadFile(Request $request)
    {
        $file_path = str_replace('api/file/upload/', '', $request->path());

        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $file = $request->file('file');
        $path = $file->storeAs("/files/$file_path", $request->filename);

        $full_path = $this->config->get('app.url') . Storage::url($path);
        return $full_path;
    }
}
