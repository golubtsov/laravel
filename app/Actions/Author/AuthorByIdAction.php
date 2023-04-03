<?php

namespace App\Actions\Author;

use \App\Models\Author;

class AuthorByIdAction
{
    public function __invoke($id)
    {
        $author = Author::find($id);
        $books = Author::find($id)->books;
        return [
            'id' => $author->id,
            'name' => $author->name,
            'about' => $author->about,
            'books' => $books
        ];
    }
}
