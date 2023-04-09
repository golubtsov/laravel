<?php

namespace App\Actions\Book;

use App\Models\Book;

class UpdateAction
{
    public function __invoke($data)
    {
        try {
            $haveBook = Book::find($data['id']);
            $haveBook->update([
                'description' => $data['description']
            ]);
            $message['message'] = 'Книга успешно обновлена.';
            return response($message);
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
