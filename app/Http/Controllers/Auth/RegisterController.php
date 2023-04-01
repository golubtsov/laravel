<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Auth\RegisterAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = (new RegisterAction(
            $request->name,
            $request->email,
            $request->password,
            $request->password_confirmation
        ))->register();
        return response()->json($response);
        // return $request->email;
    }
}
