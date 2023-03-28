<?php

namespace App\Actions\Genre;

use \App\Models\Genre;

class IndexAction
{
    public function __invoke()
    {
        $genres = Genre::all();
        foreach ($genres as $genre) {
            $genre->books;
        }
        return $genres;
    }
}