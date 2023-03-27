<?php

namespace App\Http\Controllers\Genre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genre;

class StoreController extends Controller
{
    public function __invoke(Request $request)
    {
        $message = [
            'status' => '',
            'message' => ''
        ];

        $genre = [
            'name' => $request['name']
        ];

        $haveGenre = Genre::where('name', $request['name'])->get();

        if (count($haveGenre) === 0) {
            $message['status'] = 404;
            $message['message'] = 'Данный жанр уже существует.';
            return $message;
        } else {
            Genre::create($genre);
            $message['status'] = 200;
            $message['message'] = 'Новый жанр успешно добавлен.';
            return $message;
        }
    }
}
