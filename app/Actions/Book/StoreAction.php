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
        
        try {
            $book = [
                'author_id' => $data['author_id'],
                'title' => $data['title'],
                'description' => $data['description']
            ];
    
            $haveBook = Book::where('title', $data['title'])->get();

            if (count($haveBook) === 0) {
                Book::create($book);
                $message['message'] = 'Книга добавлена.';
                return response($message);
            } else {
                $message['message'] = 'Книга с таким названием уже существует.';
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
