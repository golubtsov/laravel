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
            'message' => ''
        ];

        $genre = [
            'name' => $request['name']
        ];

        $haveGenre = Genre::where('name', $request['name'])->get();

        try {
            if(count($haveGenre) === 0) {
                Genre::create($genre);
                $message['message'] = 'Новы жанр создан.';
                return $message;
            } else {
                $message['message'] = 'Данный жанр уже существует.';
                return response($message, 404);
            }
        } catch (\Exception $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message, 500);
            }
        }
    }
}
