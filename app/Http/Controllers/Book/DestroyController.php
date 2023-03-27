<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class DestroyController extends Controller
{
    public function __invoke(Request $request)
    {
        $message = [
            'status' => '',
            'message' => ''
        ];

        $book = Book::where('id', $request['id'])->get();

        if (count($book) === 0) {
            $message['status'] = 404;
            $message['message'] = 'Такой книги не существует.';
            return $message;
        } else {
            $book[0]->delete();
            $message['status'] = 200;
            $message['message'] = 'Книга успешно удалена.';
            return $message;
        }
    }
}
