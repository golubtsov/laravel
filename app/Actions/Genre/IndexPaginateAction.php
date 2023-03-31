<?php

namespace App\Actions\Genre;

use \App\Models\Genre;

class IndexPaginateAction
{
    public function __invoke()
    {
        $genres = Genre::paginate(10);
        foreach ($genres as $genre) {
            $genre->books;
        }
        return $genres;
    }
}
