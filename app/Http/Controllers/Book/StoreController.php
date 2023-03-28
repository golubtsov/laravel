<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\StoreAction;

class StoreController extends Controller
{
    public function __invoke(Request $request, StoreAction $storeAction)
    {
        return $storeAction->__invoke($request);
    }
}
