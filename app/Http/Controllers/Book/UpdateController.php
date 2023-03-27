<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Book;

class UpdateController extends Controller
{
    public function __invoke(Request $request)
    {
        $message = [
            'status' => '',
            'message' => ''
        ];

        $haveTitle = Book::where('title', $request['title'])->get();

        if (count($haveTitle) === 0) {
            $book = Book::where('id', $request['id'])->first();
            try {
                $book->update($request->all());
                $message['status'] = 200;
                $message['message'] = 'Книга успешно обновлена.';
                return $message;
            } catch (\Exception $e) {
                if ($e->getMessage()) {
                    $message['status'] = 404;
                    $message['message'] = 'Произошла ошибка, попробуйту немного позже.';
                    return $message;
                }
            }
        } else {
            $message['status'] = 404;
            $message['message'] = 'Книга с таким названием уже существует.';
            return $message;
        }
    }
}
