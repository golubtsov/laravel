<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Token\CheckTokenAction;

class TokenController extends Controller
{
    public function __invoke(Request $request, CheckTokenAction $token)
    {
        if($token->__invoke($request->token)) {
            return response([
                'access' => true
            ]);
        }
        return response([], 404);
    }
}
