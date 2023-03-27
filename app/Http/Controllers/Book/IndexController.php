<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Book;

class IndexController extends Controller
{
    public function __invoke()
    {
        $books = Book::paginate(3);
        return $books;
    }
}
