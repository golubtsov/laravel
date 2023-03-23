<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Book;

class BookController extends Controller
{
    public function getListBooks()
    {
        $books = Book::all();
        return $books;
    }

    public function getBookById($id)
    {
        return Book::find($id);
    }
}
