<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Token\CheckTokenAction;
use App\Actions\Author\AuthorByIdAction;

class TokenController extends Controller
{
    public function __invoke(Request $request, CheckTokenAction $token)
    {
        $response = $token->__invoke($request->token);
        if($response !== false) {
            return response([
                'access' => true
            ]);
        }
        return response([], 404);
    }
}
