<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\BooksController;
use App\Http\Controllers\Api\TagsController;
use App\Http\Controllers\Api\Table_4Controller;
use App\Http\Controllers\Api\Table_5Controller;
use App\Http\Controllers\Api\FilesController;

Route::get('analytics', fn() => Storage::disk('local')->get('analytics.json'))->middleware('auth:api');

Route::post('file/upload/{table}/{column}', [FilesController::class, 'uploadFile']);
Route::get('file/download', [FilesController::class, 'download']);

Route::get('/email/verify/{id}/{hash}', [UsersController::class, 'verifyEmail'])
    ->middleware(['signed'])->name('verification.verify');

Route::group([
    'middleware' => 'auth:api',
], function() {
    
    Route::get('users/autocomplete', [UsersController::class, 'findAllAutocomplete']);
    Route::resource('users', UsersController::class);
    
    Route::get('books/autocomplete', [BooksController::class, 'findAllAutocomplete']);
    Route::resource('books', BooksController::class);
    
    Route::get('tags/autocomplete', [TagsController::class, 'findAllAutocomplete']);
    Route::resource('tags', TagsController::class);
    
    Route::get('table_4/autocomplete', [Table_4Controller::class, 'findAllAutocomplete']);
    Route::resource('table_4', Table_4Controller::class);
    
    Route::get('table_5/autocomplete', [Table_5Controller::class, 'findAllAutocomplete']);
    Route::resource('table_5', Table_5Controller::class);
    
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::any('signin/local', [AuthController::class, 'login'])->name('login');
    Route::put('verify-email', [UsersController::class, 'sendVerifyEmail']);
    Route::get('me', [AuthController::class, 'me']);
    Route::get('signin/google', [UsersController::class, 'signinGoogle']);
    Route::get('google/callback', [UsersController::class, 'callbackGoogle']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::put('password-update', [AuthController::class, 'passwordUpdate']);
    Route::post('send-password-reset-email', [AuthController::class, 'sendPasswordResetEmail']);
});
