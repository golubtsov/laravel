<?php

namespace App\Actions\Genre;

use App\Models\Genre;

class UpdateAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $haveGenre = Genre::find($data['id']);
        $haveName = Genre::where('name', $data['name'])->get();

        try {
            if (count($haveName) !== 0) {
                $message['message'] = 'Жанр с таким названием уже существует.';
                return response($message, 404);
            } else {
                $haveGenre->update([
                    'name' => $data['name']
                ]);
                $message['message'] = 'Жанр успешно обновлен.';
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
