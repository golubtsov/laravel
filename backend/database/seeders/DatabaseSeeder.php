<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // ===========================================

        // $authors = [
        //     ['name' => 'Лев Николаевич Толстой'],
        //     ['name' => 'Федор Михайлович Достоевский'],
        //     ['name' => 'Джордж Оруэлл'],
        //     ['name' => 'Борис Акунин'],
        //     ['name' => 'Фредрик Бакман'],
        //     ['name' => 'Кристин Хармель'],
        //     ['name' => 'Дэн Браун'],
        //     ['name' => 'Стивен Кинг']
        // ];

        // foreach ($authors as $author) {
        //     \App\Models\Author::factory()->create($author);
        // }

        // ===========================================

        // ===========================================

        // $books = [
        //     [
        //         'title' => 'Война и мир',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 1
        //     ],
        //     [
        //         'title' => 'Анна Каренина',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 1
        //     ],
        //     [
        //         'title' => 'Преступление и наказвние',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 2
        //     ],
        //     [
        //         'title' => '1984',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 3
        //     ],
        //     [
        //         'title' => 'Скотный двор',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 3
        //     ],
        //     [
        //         'title' => 'Яркие люди Древней Руси',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 4
        //     ]
        //     ,
        //     [
        //         'title' => 'Тревожные люди',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 5
        //     ],
        //     [
        //         'title' => 'Жена винодела',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 6
        //     ],
        //     [
        //         'title' => 'Жизнь, которая не стала моей',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 6
        //     ],
        //     [
        //         'title' => 'Код Давинчи',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 7
        //     ],
        //     [
        //         'title' => 'Происхождение',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 7
        //     ],
        //     [
        //         'title' => 'Институт',
        //         'description' => 'Что-то о книге',
        //         'author_id' => 8
        //     ]
        // ];

        // foreach ($books as $book) {
        //     \App\Models\Book::factory()->create($book);
        // }

        // ===========================================

        // ===========================================

        $genres = [
            ['name' => 'Классическая литература'],
            ['name' => 'Русская проза'],
            ['name' => 'Зарубежная проза'],
            ['name' => 'Современная проза'],
            ['name' => 'Детективы'],
            ['name' => 'Фантастика']
        ];

        foreach($genres as $genre){
            \App\Models\Genre::factory()->create($genre);
        }

        // ===========================================
    }
}
