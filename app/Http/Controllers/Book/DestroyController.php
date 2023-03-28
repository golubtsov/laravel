<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\DestroyAction;

class DestroyController extends Controller
{
    public function __invoke($id, DestroyAction $destroyAction)
    {
        return $destroyAction->__invoke($id);
    }
}
