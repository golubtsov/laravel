<?php

namespace App\Actions\Genre;

use \App\Models\Genre;

class GetGenreByIdAction
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
    }
}