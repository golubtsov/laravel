<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Author;
use App\Http\Controllers\Book;
use App\Http\Controllers\Genre;
use App\Http\Controllers\Auth;

Route::group(['namespace' => 'Book'], function(){
    Route::get('/books', [Book\IndexController::class, '__invoke']);
    Route::get('/books/{id}', [Book\GetBookByIdController::class, '__invoke']);
    Route::post('/books/create', [Book\StoreController::class, '__invoke']);
    Route::put('/books/update', [Book\UpdateController::class, '__invoke']);
    Route::delete('/books/delete/{id}', [Book\DestroyController::class, '__invoke']);
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
    Route::put('/genres/update', [Genre\UpdateController::class, '__invoke']);
    Route::delete('/genres/delete/{id}', [Genre\DestroyController::class, '__invoke']);
});

Route::group(['namespace' => 'Ayth'], function(){
    Route::post('/register', [Auth\RegisterController::class, '__invoke']);
    Route::post('/login', [Auth\LoginController::class, '__invoke']);
});

Route::post('/test', function(Request $request){
    return $request->token;
});