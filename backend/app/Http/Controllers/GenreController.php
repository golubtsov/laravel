<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Genre;

class GenreController extends Controller
{
    public function getListGenres()
    {
        $result = [];
        $genres = Genre::all();
        foreach ($genres as $genre) {
            $result[] = ["$genre->name" => count($genre->books)];
        }
        return $result;
    }

    public function getGenreById($id)
    {
        return Genre::find($id);
    }
}
