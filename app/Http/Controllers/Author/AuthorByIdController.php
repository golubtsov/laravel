<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Author;

class AuthorByIdController extends Controller
{
    public function __invoke($id)
    {
        $author = Author::find($id);
        $books = Author::find($id)->books;
        return [
            'id' => $author->id,
            'name' => $author->name, 
            'books' => $books
        ];
    }
}
