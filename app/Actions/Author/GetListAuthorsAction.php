<?php

namespace App\Actions\Author;

use \App\Models\Author;

class GetListAuthorsAction
{
    public function __invoke()
    {
        $books = Author::all();
        return $books;
    }
}