<?php

namespace App\Actions\Admin;

use App\Models\User;

class GetListUsersAction
{
    public function __invoke()
    {
        try {
            $users = [];
            foreach (User::all() as $user) {
                $users[] = [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role
                ];
            }
            return $users;
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
