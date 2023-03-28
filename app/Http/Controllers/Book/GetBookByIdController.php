<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use App\Actions\Book\GetBookByIdAction;

class GetBookByIdController extends Controller
{
    public function __invoke(GetBookByIdAction $getBookByIdAction, $id)
    {
        return $getBookByIdAction->__invoke($id);
    }
}
