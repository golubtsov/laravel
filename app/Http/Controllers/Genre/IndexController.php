<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use App\Actions\Genre\IndexAction;

class IndexController extends Controller
{
    public function __invoke(IndexAction $indexAction)
    {
        return $indexAction->__invoke();
    }
}
