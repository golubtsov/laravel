<?php

namespace App\Actions\Genre;

use App\Models\Genre;

class StoreAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $genre = [
            'name' => $data['name']
        ];

        $haveGenre = Genre::where('name', $data['name'])->get();

        try {
            if(count($haveGenre) === 0) {
                Genre::create($genre);
                $message['message'] = 'Новы жанр создан.';
                return $message;
            } else {
                $message['message'] = 'Данный жанр уже существует.';
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
