<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function getListBooks()
    {
        $books = \App\Models\Book::all();
        foreach ($books as $book) {
            echo '<pre>';
            echo $book->title;
            echo '<br>';
            echo 'Author - ' . $book->author->name;
            echo '</pre>';
        }
    }

    public function getBookById($id)
    {
        return "book - $id";
    }
}
