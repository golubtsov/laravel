<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Genre;

class IndexPaginateController extends Controller
{
    public function __invoke()
    {
        $genres = Genre::paginate(3);
        foreach ($genres as $genre) {
            $genre->books;
        }
        return $genres;
    }
}
