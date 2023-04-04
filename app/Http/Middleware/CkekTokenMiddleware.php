<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CkekTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $user = User::where('token', $request['token'])->get();
            if (count($user) === 0) {
                return response(
                    [
                        'access' => false,
                        'message' => 'Отказано в доступе.'
                    ]
                ); 
            } else {
                return $next($request);
            }
            return count($user);
        } catch (\ErrorException $error) {
            if ($error) {
                return response(
                    [
                        'access' => false,
                        'message' => 'Что-то пошло не так, попробуйте немного позже.'
                    ]
                );
            }
        }
    }
}
