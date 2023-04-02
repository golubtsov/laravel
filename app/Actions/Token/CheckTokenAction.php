<?php

namespace App\Actions\Token;

use \App\Models\User;
use App\Models\UserAuthor;
use App\Actions\Author\AuthorByIdAction;

class CheckTokenAction
{
    public function __invoke($token)
    {
        try {
            $user = User::where('token', $token)->get();
            if (count($user) === 0) {
                return false;
            } else {
                $author = UserAuthor::where('user_id', $user[0]['id'])->first();
                $infoAuthor = (new AuthorByIdAction())->__invoke($author->author_id);
                return $infoAuthor;
            }
            return count($user);
        } catch (\ErrorException $error) {
            if ($error) {
                return false;
            }
        }
    }
}
