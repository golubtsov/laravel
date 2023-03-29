<?php

namespace App\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RegisterAction
{
    use RegistersUsers;

    public $name, $email, $password, $password_confirm;

    public function __construct(
        $name,
        $email,
        $password,
        $password_confirm
    ) {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->password_confirm = $password_confirm;
    }

    protected function validator()
    {
        $validator = Validator::make([
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            'password_confirmation' => $this->password_confirm
        ], [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed']
        ]);

        if ($validator->fails()) {
            return [
                'status' => false,
                'message' => $validator->messages()
            ];
        } else {
            return [
                'status' => true
            ];
        }
    }

    protected function create()
    {
        try {
            User::create([
                'name' => $this->name,
                'email' => $this->email,
                'password' => Hash::make($this->password),
                'token' => Str::random(40),
                'role' => 'author'
            ]);
            return response([
                'message' => 'Регистрация прошла успешно.'
            ], 200);
        } catch (\ErrorException $error) {
            if($error){
                return response([
                    'message' => 'Что-то пошло не так, попробуйте немного позже.'
                ], 500);
            }
        }
    }

    public function register()
    {
        $validate = $this->validator();
        if ($validate['status'] === false) {
            return response([
                'message' => $validate['message']
            ], 404);
        } else {
            return $this->create();
        }
    }
}
