<?php

namespace App\Actions\Author;

use \App\Models\Author;

class IndexPaginationAction
{
    public function __invoke()
    {
        $authors = Author::paginate(10);
        foreach ($authors as $author) {
            $author->books;
        }
        return $authors;
    }
}
