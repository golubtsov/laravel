<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Admin\UpdateUserAction;

class UpdateUserController extends Controller
{
    public function __invoke(
        Request $request,
        UpdateUserAction $updateUser
    ) {
        return $updateUser->__invoke($request);
    }
}
