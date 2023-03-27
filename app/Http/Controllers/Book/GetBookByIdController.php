<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Book;

class GetBookByIdController extends Controller
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
