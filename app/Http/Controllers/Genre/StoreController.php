<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Genre\StoreAction;

class StoreController extends Controller
{
    public function __invoke(Request $request, StoreAction $storeAction)
    {
        return $storeAction->__invoke($request);
    }
}
