<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenresController extends Controller
{
    public function getBooksByGenre($name)
    {
        return "books by $name";
    }
}
