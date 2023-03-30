<?php

namespace App\Actions\Book;

use App\Models\Book;

class StoreAction
{
    public function __invoke($data)
    {
        $message = [
            'message' => ''
        ];

        $book = [
            'author_id' => $data['author_id'],
            'title' => $data['title'],
            'description' => $data['description']
        ];

        $haveBook = Book::where('title', $data['title'])->get();


        try {
            if (count($haveBook) === 0) {
                Book::create($book);
                $message['message'] = 'Книга добавлена.';
                return response($message, 200);
            } else {
                $message['message'] = 'Книга с таким названием уже существует.';
                return response($message, 404);
            }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message, 500);
            }
        }
    }
}