<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Genre;

class GetGenreByIdController extends Controller
{
    public function __invoke($id)
    {
        $genre = Genre::find($id);
        $books = Genre::find($id)->books;
        return [
            'id' => $genre->id,
            'name' => $genre->name,
            'books' => $books
        ];
        return $books;
    }
}
