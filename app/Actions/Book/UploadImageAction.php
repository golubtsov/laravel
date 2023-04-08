<?php

namespace App\Actions\Book;

class UploadImageAction
{
    public function __invoke($data)
    {
        if($data->has('image')){
            $img = $data['image'];
            $pathImage = $img->move('storage/books', "$data->title.jpg");
            return $pathImage;
        } else {
            return false;
        }
    }
}
