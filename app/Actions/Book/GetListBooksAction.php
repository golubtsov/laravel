<?php

namespace App\Actions\Book;

use \App\Models\Book;

class GetListBooksAction
{
    public function __invoke()
    {
        $books = Book::all();
        return $books;
    }
}
