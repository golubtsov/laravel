<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Token\CheckTokenAction;
use App\Models\Author;

class DataAuthorController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        try {
            $check = (new CheckTokenAction())->__invoke($request['token']);
            if (!$check) {
                return response([
                    'access' => false,
                    'message' => 'Отказано в доступе.'
                ]);
            } else {
                $dataAuthor = Author::find($id);
                $dataUser = $dataAuthor->user;
                return [
                    "access" => true,
                    "name" => $dataAuthor['name'],
                    "about" => $dataAuthor['about'],
                    "email" => $dataUser[0]['email'],
                    "books" => $dataAuthor->books,
                ];
            }
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
