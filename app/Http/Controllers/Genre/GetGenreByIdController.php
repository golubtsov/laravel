<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use App\Actions\Genre\GetGenreByIdAction;

class GetGenreByIdController extends Controller
{
    public function __invoke(GetGenreByIdAction $getGenreByIdAction, $id)
    {
        return $getGenreByIdAction->__invoke($id);
    }
}
