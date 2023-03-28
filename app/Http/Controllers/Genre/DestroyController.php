<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Genre\DestroyAction;

class DestroyController extends Controller
{
    public function __invoke($id, DestroyAction $destroyAction)
    {
        return $destroyAction->__invoke($id);
    }
}
