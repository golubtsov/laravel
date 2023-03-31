<?php

namespace App\Actions\Book;

use \App\Models\Book;

class IndexAction
{
    public function __invoke()
    {
        $books = Book::paginate(5);
        foreach($books as $book){
            $book->author;
        }
        return $books;
    }
}