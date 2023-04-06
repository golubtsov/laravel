<?php

namespace App\Actions\Admin;

use App\Models\User;

class UpdateUserAction
{
    public function __invoke($user)
    {
        return '$users';
        try {
            
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
