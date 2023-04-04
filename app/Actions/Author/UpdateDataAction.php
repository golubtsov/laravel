<?php

namespace App\Actions\Author;

use \App\Models\Author;
use App\Models\User;

class UpdateDataAction
{
    public function __invoke($data)
    {

        $message = [
            'message' => ''
        ];

        try {
            $author = Author::find($data['id']);
            $user = User::find($author->user[0]->id);
            $author->update([
                'name' => $data['name'],
                'about' => $data['about']
            ]);
            $user->update([
                'name' => $data['name']
            ]);
            $message['message'] = 'Ваши данные успешно обновлены.';
            return response($message);
            return $author->user[0]->id;
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
