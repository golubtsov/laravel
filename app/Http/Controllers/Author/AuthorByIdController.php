<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Actions\Author\AuthorByIdAction;

class AuthorByIdController extends Controller
{
    public function __invoke($id, AuthorByIdAction $author)
    {
        return $author->__invoke($id);
    }
}
