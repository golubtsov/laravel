<?php

namespace App\Actions\Book;

use \App\Models\Book;

class IndexAction
{
    public function __invoke()
    {
        $books = Book::paginate(3);
        return $books;
    }
}