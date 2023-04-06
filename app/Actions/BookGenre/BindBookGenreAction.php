<?php

namespace App\Actions\BookGenre;

use App\Models\BookGenre;

class BindBookGenreAction
{
    public function __invoke($bookId, $arrGenres)
    {
        try {
            foreach ($arrGenres as $el) {
                BookGenre::create([
                    'genre_id' => $el,
                    'book_id' => $bookId
                ]);
            }
            return true;
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
