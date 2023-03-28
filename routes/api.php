<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Author;
use App\Http\Controllers\Book;
use App\Http\Controllers\Genre;

Route::group(['namespace' => 'Book'], function(){
    Route::get('/books', [Book\IndexController::class, '__invoke']);
    Route::get('/books/{id}', [Book\GetBookByIdController::class, '__invoke']);
    Route::post('/books/create', [Book\StoreController::class, '__invoke']);
    Route::post('/books/update', [Book\UpdateController::class, '__invoke']);
    Route::post('/books/delete', [Book\DestroyController::class, '__invoke']);
});

Route::group(['namespace' => 'Author'], function(){
    Route::get('/authors', [Author\IndexPaginateController::class, '__invoke']);
    Route::get('/authors/{id}', [Author\AuthorByIdController::class, '__invoke']);
});

Route::group(['namespace' => 'Genre'], function(){
    Route::get('/genres', [Genre\IndexController::class, '__invoke']);
    Route::get('/genres_paginate', [Genre\IndexPaginateController::class, '__invoke']);
    Route::get('/genres/{id}', [Genre\GetGenreByIdController::class, '__invoke']);
    Route::post('/genres/create', [Genre\StoreController::class, '__invoke']);
});

Route::post('/login', function(Request $request){
    $user = [
        $request['email'],
        $request['password']
    ];
    return $user;
});