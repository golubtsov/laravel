<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use \App\Models\Author;

class AuthorController extends Controller
{
    public function getListAuthors()
    {
        $authors = Author::all();
        echo 'Авторы<br>';
        foreach($authors as $author){
            dump($author->books);
            echo $author->name . ' - ' . count($author->books) . '<br>';
        }
    }
}
