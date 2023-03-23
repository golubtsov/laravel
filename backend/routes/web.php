<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BookController::class, 'getListBooks']);

Route::get('/authors', [AuthorController::class, 'getListAuthors']);
