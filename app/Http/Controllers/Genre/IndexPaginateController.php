<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use App\Actions\Genre\IndexPaginateAction;

class IndexPaginateController extends Controller
{
    public function __invoke(IndexPaginateAction $indexPaginateAction)
    {
        return $indexPaginateAction->__invoke();
    }
}
