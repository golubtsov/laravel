<?php

namespace App\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class LoginAction
{
    public function __invoke($data)
    {
        $validator = Validator::make($data->all(), [
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if($validator->fails()){
            return response([
                'status' => false,
                'message' => $validator->getMessageBag()
            ], 422);
        }

        if(Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password']
        ])){
            $user = User::where('email', $data['email'])->first();
            $token = Str::random(40);
            $user->update([
                'token' => $token,
            ]);
            return response([
                'status' => true,
                'message' => 'Авторизация прошла успешно!',
                'token' => $token,
                'user_id' => $user->id
            ]);
        } else {
            return response([
                'status' => false,
                'msg' => 'Email или пароль указаны не верно.'
            ], 422);
        }
    }
}