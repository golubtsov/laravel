<?php

namespace App\Actions\Auth;

use App\Actions\Auth\GetUserByEmailAction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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
            ]);
        }

        if(Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password']
        ])){
            $user = (new GetUserByEmailAction())->__invoke($data['email']);
            return response([
                'status' => true,
                'message' => 'Авторизация прошла успешно!',
                'token' => $user['token']
            ]);
        } else {
            return response([
                'status' => false,
                'message' => 'Email или пароль указаны не верно.'
            ]);
        }
    }
}
