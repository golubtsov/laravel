<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\StoreAction;

class StoreController extends Controller
{
    public function __invoke(
        Request $request,
        StoreAction $storeAction
    ) {
        try {
            return $storeAction->__invoke($request);
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
