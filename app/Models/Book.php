<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function books(){
        return $this->hasMany(Book::class);
    }

    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
