<?php

namespace App\Actions\Author;

use \App\Models\Author;
use App\Models\User;

class DeleteProfileAction
{
    public function __invoke($id)
    {

        $message = [
            'message' => ''
        ];

        try {
            $author = Author::where('id', $id)->get();
            $user = User::find($author[0]->user[0]->id);
            if (count($author) === 0) {
                $message['message'] = 'Такого пользователя не существует.';
                return response($message);
            } else {
                $author[0]->delete();
                $user->delete();
                $message['message'] = 'Пользователь успешно удален.';
                return $message;
            }
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
