<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetDataUserController extends Controller
{
    public function __invoke($id)
    {
        return $id;
    }
}
