<?php

namespace App\Actions\Token;

use \App\Models\User;

class CheckTokenAction
{
    public function __invoke($token)
    {
        try {
            $user = User::where('token', $token)->get();
            if (count($user) === 0) {
                return false;
            } else {
                return true;
            }
            return count($user);
        } catch (\ErrorException $error) {
            if($error){
                return false;
            }
        }
    }
}
