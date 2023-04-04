<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Author\UpdateDataAction;

class UpdateDataController extends Controller
{
    public function __invoke(
        Request $request,
        UpdateDataAction $update
    ) {
        return $update->__invoke($request);
    }
}
