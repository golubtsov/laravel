<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'BooksController@getListBooks');

Route::get('/books/{id}', 'BooksController@getBookById');

Route::get('/genres/{name}', 'GenresController@getBooksByGenre');

Route::get('/authors', 'AuthorController@getListAuthors');

Route::get('/authors/{name}', 'AuthorController@getAuthorByName');

Route::get('/login', 'LoginController@loginup');

Route::get('/cinemas', 'CinemasController@cinemas');

Route::get('/movies', 'MoviesController@movies');

