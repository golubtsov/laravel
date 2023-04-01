<?php

namespace App\Actions\Auth;

use App\Models\User;
use App\Models\UserAuthor;
use App\Actions\Author\AuthorByIdAction;
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
            ]);
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
            $author = UserAuthor::where('user_id', $user->id)->first();
            $infoAuthor = (new AuthorByIdAction())->__invoke($author->author_id);
            return response([
                'status' => true,
                'message' => 'Авторизация прошла успешно!',
                'token' => $token,
                'author' => $infoAuthor
            ]);
        } else {
            return response([
                'status' => false,
                'message' => 'Email или пароль указаны не верно.'
            ]);
        }
    }
}
