<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use App\Actions\Book\GetListBooksAction;

class GetListBooksController extends Controller
{
    public function __invoke(GetListBooksAction $listBooks)
    {
        return $listBooks->__invoke();
    }
}
