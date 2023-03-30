<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Auth\LoginAction;

class LoginController extends Controller
{
    public function __invoke(Request $request, LoginAction $loginAction)
    {
       return $loginAction->__invoke($request);
    }
}
