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

        try {
            $haveBook = Book::find($data['id']);
            // $haveTitle = Book::where('title', $data['title'])->get();
            // if (count($haveTitle) !== 0) {
            //     $message['message'] = 'Книга с таким названием уже существует.';
            //     return response($message);
            // } else {
                $haveBook->update([
                    'title' => $data['title'],
                    'description' => $data['description']
                ]);
                $message['message'] = 'Книга успешно обновлена.';
                return response($message);
            // }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
