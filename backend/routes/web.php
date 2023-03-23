<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BookController::class, 'getListBooks']);

Route::get('/books', [BookController::class, 'getListBooks']);

Route::get('/books/{id}', [BookController::class, 'getBookById']);

Route::get('/authors', [AuthorController::class, 'getListAuthors']);

Route::get('/authors/{id}', [AuthorController::class, 'getAuthorById']);

Route::get('/genres', [GenreController::class, 'getListGenres']);

Route::get('/genres/{id}', [GenreController::class, 'getGenreById']);