<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Actions\Author\GetListAuthorsAction;

class GetListAuthorsController extends Controller
{
    public function __invoke(GetListAuthorsAction $listAuthors)
    {
        return $listAuthors->__invoke();
    }
}
