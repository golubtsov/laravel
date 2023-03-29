<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('{any}', [MainController::class, 'index'])->where('any', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
