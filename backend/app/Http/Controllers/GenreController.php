<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \App\Models\Genre;

class GenreController extends Controller
{
    public function getListGenres(){
        $genres = Genre::all();
        echo 'Жанры<br>';
        foreach($genres as $genre){
            echo $genre->name. ': ';
            foreach($genre->books as $book){
                echo $book->title . ' | ';
            }
            echo '<br>';
        }
    }
}
