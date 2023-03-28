<?php

namespace App\Actions\Genre;

use App\Models\Genre;

class DestroyAction
{
    public function __invoke($id)
    {
        $message = [
            'message' => ''
        ];

        $genre = Genre::where('id', $id)->get();

        try {
            if (count($genre) === 0) {
                $message['message'] = 'Такого жанра не существует.';
                return response($message, 404);
            } else {
                $genre[0]->delete();
                $message['message'] = 'Жанр успешно удален.';
                return response($message, 200);
            }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message, 500);
            }
        }
    }
}

