<?php

namespace App\Actions\Book;

use App\Models\Book;

class UpdateAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $haveBook = Book::find($data['id']);
        $haveTitle = Book::where('title', $data['title'])->get();

        try {
            if (count($haveTitle) !== 0) {
                $message['message'] = 'Книга с таким названием уже существует.';
                return response($message, 404);
            } else {
                $haveBook->update([
                    'title' => $data['title'],
                    'description' => $data['description']
                ]);
                $message['message'] = 'Книга успешно обновлена.';
                return response($message, 200);
            }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message, 500);
            }
        }

        return $haveBook;
    }
}
