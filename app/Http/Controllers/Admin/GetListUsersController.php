<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Actions\Admin\GetListUsersAction;

class GetListUsersController extends Controller
{
    public function __invoke(GetListUsersAction $listUsers)
    {
        return $listUsers->__invoke();
    }
}
