<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Author;

class IndexPaginateController extends Controller
{
    public function __invoke()
    {
        $authors = Author::paginate(10);
        foreach ($authors as $author) {
            $author->books;
        }
        return $authors;
    }
}
