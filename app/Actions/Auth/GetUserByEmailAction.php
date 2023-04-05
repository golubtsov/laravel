<?php

namespace App\Actions\Auth;

use App\Models\User;
use Illuminate\Support\Str;

class GetUserByEmailAction
{
    public function __invoke($email)
    {
        $user = User::where('email', $email)->first();
        $token = Str::random(40);
        $user->update([
            'token' => $token,
        ]);
        return [
            'status' => $user->role,
            'token' => $token
        ];
    }
}
