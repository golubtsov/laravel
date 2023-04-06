<?php

namespace App\Actions\Author;

use App\Models\Author;

class StoreAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $author = [
            'name' => $data['name'],
            'about' => $data['about']
        ];

        $haveAuthor = Author::where('name', $data['name'])->get();

        try {
            if (count($haveAuthor) === 0) {
                Author::create($author);
                $message['message'] = 'Новый автор добавлен.';
                return $message;
            } else {
                $message['message'] = 'Данный автор уже существует.';
                return response($message);
            }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
