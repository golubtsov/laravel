<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\UpdateAction;
use App\Actions\Token\CheckTokenAction;

class UpdateController extends Controller
{
    public function __invoke(
        Request $request,
        UpdateAction $updateAction,
        CheckTokenAction $checkTokenAction
    ) {
        try {
            $check = $checkTokenAction->__invoke($request['token']);
            if (!$check) {
                return response([
                    'access' => false,
                    'message' => 'Отказано в доступе.'
                ]);
            } else {
                return $updateAction->__invoke($request);
            }
        } catch (\ErrorException $error) {
            if ($error) {
                return response([
                    'access' => false,
                    'message' => 'Что-то пошло не так. Попробуйте немного позже.'
                ]);
            }
        }
        return $request;
    }
}