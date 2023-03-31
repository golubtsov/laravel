<?php

namespace App\Actions\Book;

use \App\Models\Book;

class IndexAction
{
    public function __invoke()
    {
        $books = Book::paginate(4);
        foreach($books as $book){
            $book->author;
        }
        return $books;
    }
}