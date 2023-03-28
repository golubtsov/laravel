<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\DestroyAction;

class DestroyController extends Controller
{
    public function __invoke(Request $request, DestroyAction $destroyAction)
    {
        return $destroyAction->__invoke($request);
    }
}
