<?php

namespace App\Actions\Admin;

use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use App\Models\User;

class InfoSiteAction
{
    public function __invoke()
    {
        $message = [
            'message' => ''
        ];

        try {
            $books = count(Book::all());
            $genres = count(Genre::all());
            $authors = count(Author::all());
            $users = count(User::all());
            return [
                'books' => $books,
                'genres' => $genres,
                'authors' => $authors,
                'users' => $users
            ];
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
