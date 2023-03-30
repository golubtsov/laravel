<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Book\StoreAction;
use App\Actions\Token\CheckTokenAction;

class StoreController extends Controller
{
    public function __invoke(
        Request $request, 
        StoreAction $storeAction,
        CheckTokenAction $checkTokenAction
    )
    {
        
        $check = $checkTokenAction->__invoke($request['token']);
        if(!$check){
            return response([
                'access' => false,
                'message' => 'Отказано в доступе.'
            ]);
        } else {
            return $storeAction->__invoke($request);
        }
    }
}
