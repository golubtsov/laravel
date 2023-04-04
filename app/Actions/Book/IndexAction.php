<?php

namespace App\Actions\Book;

use \App\Models\Book;

class IndexAction
{
    public function __invoke()
    {
        try {
            $books = Book::paginate(5);
            foreach ($books as $book) {
                $book->author;
            }
            return $books;
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
