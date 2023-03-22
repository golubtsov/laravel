<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MoviesController extends Controller
{
    public function movies() {
        $movies = \App\Models\Movie::all();
        foreach($movies as $movie){
            echo '<pre>';
            echo $movie->name;
            echo '<br>';
            echo '<b>Cinemas:</b> - ' . count($movie->cinemas);
            // foreach ($cinema->movies as $movie) {
            //     echo $movie->name . ' | ';
            // }
            echo '</pre>';
        }
    }
}
