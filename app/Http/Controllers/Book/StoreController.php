<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class StoreController extends Controller
{
    public function __invoke(Request $request)
    {
        $book = [
            'author_id' => $request['author_id'],
            'title' => $request['title'],
            'description' => $request['description']
        ];

        $message = [
            'status' => '',
            'message' => ''
        ];

        try {
            Book::create($book);
            $message['status'] = 200;
            $message['message'] = 'Книга добавлена.';
            return $message;
        } catch (\Exception $e) {
            if ($e->getMessage()) {
                $message['status'] = 404;
                $message['message'] = 'Книга с таким названием уже существует.';
                return $message;
            }
        }
    }
}
