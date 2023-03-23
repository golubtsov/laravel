<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BookController::class, 'listBook']);

Route::get('/authors', [AuthorController::class, 'listAuthors']);
