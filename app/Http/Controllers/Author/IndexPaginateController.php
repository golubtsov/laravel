<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Actions\Author\IndexPaginationAction;

class IndexPaginateController extends Controller
{
    public function __invoke(IndexPaginationAction $index)
    {
        return $index->__invoke();
    }
}
