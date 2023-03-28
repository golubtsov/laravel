<?php

namespace App\Actions\Book;

use App\Models\Book;

class DestroyAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $book = Book::where('id', $data['id'])->get();

        try {
            if (count($book) === 0) {
                $message['message'] = 'Такой книги не существует.';
                return response($message, 404);
            } else {
                $book[0]->delete();
                $message['message'] = 'Книга успешно удалена.';
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
