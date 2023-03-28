<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use App\Actions\Book\IndexAction;

class IndexController extends Controller
{
    public function __invoke(IndexAction $indexAction)
    {
        return $indexAction->__invoke();
    }
}
