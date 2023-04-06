<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Actions\Author\StoreAction;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(
        Request $request,
        StoreAction $store
    )
    {
        return $store->__invoke($request);
    }
}
