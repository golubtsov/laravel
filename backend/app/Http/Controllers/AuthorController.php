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
        $result = [];
        foreach ($authors as $author) {
            $result[] = ["$author->name" => count($author->books)];
        }
        return $result;
    }

    public function getAuthorById($id)
    {
        return Author::find($id);
    }
}
