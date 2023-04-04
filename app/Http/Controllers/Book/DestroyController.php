<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use App\Actions\Book\DestroyAction;

class DestroyController extends Controller
{
    public function __invoke($id, DestroyAction $destroyAction)
    {
        try {
            return $destroyAction->__invoke($id);
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
