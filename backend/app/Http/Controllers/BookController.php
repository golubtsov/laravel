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
        echo 'Книги<br>';
        foreach($books as $book){
            echo $book->title . '<br>';
        }
    }
}
