<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CinemasController extends Controller
{
    public function cinemas()
    {
        $cinemas = \App\Models\Cinema::all();
        foreach ($cinemas as $cinema) {
            echo '<pre>';
            echo $cinema->name;
            echo '<br>';
            echo '<b>Movies:</b> - ' . count($cinema->movies);
            // foreach ($cinema->movies as $movie) {
            //     echo $movie->name . ' | ';
            // }
            echo '</pre>';
        }
    }
}
