<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function getListBooks()
    {
        return 'list books';
    }

    public function getBookById($id)
    {
        return "book - $id";
    }
}
