<?php

namespace App\Actions\Book;

use App\Models\Book;
use App\Actions\BookGenre\BindBookGenreAction;
use App\Actions\Book\UploadImageAction;

class StoreAction
{
    public function __invoke($newBook)
    {
        try {
            $book = [
                'author_id' => $newBook['author_id'],
                'title' => $newBook['title'],
                'description' => $newBook['description'],
                'image' => (new UploadImageAction)->__invoke($newBook)
            ];

            $haveBook = Book::where('title', $newBook['title'])->get();

            if (count($haveBook) === 0) {
                $bookId = Book::create([
                    'author_id' => $book['author_id'],
                    'title' => $book['title'],
                    'image' => $book['image'],
                    'description' => $book['description']
                ]);

                if ((new BindBookGenreAction)->__invoke($bookId->id, $newBook['genres'])) {
                    $message['message'] = 'Книга добавлена.';
                    return response($message);
                }
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
