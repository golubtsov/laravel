<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Genre\UpdateAction;

class UpdateController extends Controller
{
    public function __invoke(Request $request, UpdateAction $updateAction)
    {
        return $updateAction->__invoke($request);
    }
}
