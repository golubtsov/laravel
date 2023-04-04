<?php

namespace App\Http\Controllers\Author;

use App\Http\Controllers\Controller;
use App\Actions\Author\DeleteProfileAction;

class DeleteProfileController extends Controller
{
    public function __invoke($id, DeleteProfileAction $deleteProfile)
    {
        return $deleteProfile->__invoke($id);
    }
}
