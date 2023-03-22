<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthorController extends Controller
{

    public function getListAuthors()
    {
        $authors = \App\Models\Author::all();
        foreach ($authors as $author) {
            echo '<pre>';
            echo $author->name;
            echo '<br>';
            echo 'Books - ';
            foreach ($author->books as $book) {
                echo $book->title . ' | ';
            }
            echo '</pre>';
        }
    }

    public function getAuthorByName($name)
    {
        return "author - $name";
    }
}
