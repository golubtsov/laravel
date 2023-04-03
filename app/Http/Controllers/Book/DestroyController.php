<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\DestroyAction;
use App\Actions\Token\CheckTokenAction;

class DestroyController extends Controller
{
    public function __invoke(Request $request, $id, DestroyAction $destroyAction)
    {
        // return $request;
        // return $destroyAction->__invoke($id);
        try {
            $check = (new CheckTokenAction())->__invoke($request['token']);
            if (!$check) {
                return response([
                    'access' => false,
                    'message' => 'Отказано в доступе.'
                ]);
            } else {
                return $destroyAction->__invoke($id);
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
