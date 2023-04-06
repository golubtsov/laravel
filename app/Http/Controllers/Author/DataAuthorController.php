<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Models\Author;

class DataAuthorController extends Controller
{
    public function __invoke($id)
    {
        try {
            $dataAuthor = Author::find($id);
            return [
                "access" => true,
                "name" => $dataAuthor['name'],
                "about" => $dataAuthor['about'],
                "books" => $dataAuthor->books,
            ];
        } catch (\ErrorException $error) {
            if ($error) {
                return response([
                    'access' => false,
                    'message' => 'Что-то пошло не так. Попробуйте немного позже.'
                ]);
            }
        }
    }
}
