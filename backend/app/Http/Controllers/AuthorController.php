<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthorController extends Controller
{

    public function getListAuthors()
    {
        $authors = \App\Models\Author::all();
        foreach($authors as $author) {
            echo '<pre>';
            print_r($author['name']);
            echo 'books - <br>';
            if ($author->books) {
                print_r($author->books);
            } else {
                print 'fasle';
            }
            echo '</pre>';
        }
    }

    public function getAuthorByName($name)
    {
        return "author - $name";
    }
}
