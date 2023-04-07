<?php

namespace App\Actions\Admin;

use App\Models\User;

class UpdateUserAction
{
    public function __invoke($user)
    {
        try {
            $findUser = User::find($user['id']);
            $findUser->update([
                'role' => $user['role']
            ]);
            $message['message'] = 'Роль пользователя изменена.';
            return response($message);
        } catch (\ErrorException $error) {
            if ($error) {
                $message['message'] = 'Что-то пошло не так, попробуйте немного позже.';
                return response($message);
            }
        }
    }
}
