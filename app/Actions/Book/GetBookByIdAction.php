<?php

namespace App\Actions\Book;

use \App\Models\Book;

class GetBookByIdAction
{
    public function __invoke($id)
    {
        $book = Book::find($id);
        $author = Book::find($id)->author;
        return [
            'id' => $book->id,
            'title' => $book->title,
            'description' => $book->description,
            'author_id' => $author->id,
            'author_name' => $author->name,
        ];
    }
}