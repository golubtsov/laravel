<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CkekTokenMiddleware;
use App\Http\Controllers\Author;
use App\Http\Controllers\Book;
use App\Http\Controllers\Genre;
use App\Http\Controllers\Auth;
use App\Http\Controllers\Admin;
use App\Http\Middleware\CheckRoleMiddleware;

Route::group(['namespace' => 'Book'], function(){
    Route::get('/books', [Book\IndexController::class, '__invoke']);
    Route::get('/books/{id}', [Book\GetBookByIdController::class, '__invoke']);
    Route::get('/list/books', [Book\GetListBooksController::class, '__invoke']);
    Route::post('/books/create', [Book\StoreController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::put('/books/update', [Book\UpdateController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::delete('/books/delete/{id}', [Book\DestroyController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
});

Route::group(['namespace' => 'Author'], function(){
    Route::get('/authors', [Author\IndexPaginateController::class, '__invoke']);
    Route::get('/authors/{id}', [Author\AuthorByIdController::class, '__invoke']);
    Route::post('/author/{id}', [Author\DataAuthorController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::put('/author/update', [Author\UpdateDataController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::delete('/author/delete/{id}', [Author\DeleteProfileController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
});

Route::group(['namespace' => 'Genre'], function(){
    Route::get('/genres', [Genre\IndexController::class, '__invoke']);
    Route::get('/genres_paginate', [Genre\IndexPaginateController::class, '__invoke']);
    Route::get('/genres/{id}', [Genre\GetGenreByIdController::class, '__invoke']);
    Route::post('/genres/create', [Genre\StoreController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::put('/genres/update', [Genre\UpdateController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
    Route::delete('/genres/delete/{id}', [Genre\DestroyController::class, '__invoke'])->middleware(CkekTokenMiddleware::class);
});

Route::group(['namespace' => 'Ayth'], function(){
    Route::post('/register', [Auth\RegisterController::class, '__invoke']);
    Route::post('/login', [Auth\LoginController::class, '__invoke']);
    Route::post('/token', [Auth\TokenController::class, '__invoke']);
});

Route::group(['namespace' => 'Admin'], function(){
    Route::post('/admin', [Admin\InfoSiteController::class, '__invoke'])->middleware(CheckRoleMiddleware::class);
});