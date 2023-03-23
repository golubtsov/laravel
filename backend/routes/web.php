<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BookController::class, 'getListBooks']);

Route::get('/authors', [AuthorController::class, 'getListAuthors']);

Route::get('/genres', [GenreController::class, 'getListGenres']);