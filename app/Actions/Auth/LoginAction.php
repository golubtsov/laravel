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

        if ($validator->fails()) {
            return response([
                'status' => false,
                'message' => 'Заполните все поля формы. Проверьте правильность заполнения Email.'
            ]);
        }

        if (Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password']
        ])) {
            $user = (new GetUserByEmailAction())->__invoke($data['email']);
            return response([
                'status' => true,
                'token' => $user['token'],
                'status' => $user['status']
            ]);
        } else {
            return response([
                'status' => false,
                'message' => 'Email или пароль указаны не верно.'
            ]);
        }
    }
}
