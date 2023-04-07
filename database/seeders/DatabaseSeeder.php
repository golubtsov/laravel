<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        \App\Models\User::factory()->create([
            'name' => 'Администратор',
            'email' => 'admin@admin.com',
            'password' => '$2y$10$K.pID0TUE5Qx8cJIfUb9dOGo.HXNJGq0/mpK1/yUdtJ9ckmoXSupC',
            'token' => '',
            'role' => 'admin'
        ]);

        // ===========================================

        $authors = [
            [
                'name' => 'Лев Николаевич Толстой',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Федор Михайлович Достоевский',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Джордж Оруэлл',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Борис Акунин',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Фредрик Бакман',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Кристин Хармель',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Дэн Браун',
                'about' => 'Немного текста автора о себе.'
            ],
            [
                'name' => 'Стивен Кинг',
                'about' => 'Немного текста автора о себе.'
            ]
        ];

        foreach ($authors as $author) {
            \App\Models\Author::factory()->create($author);
        }

        // ===========================================

        // ===========================================

        $books = [
            [
                'title' => 'Война и мир',
                'description' => 'Что-то о книге',
                'author_id' => 1
            ],
            [
                'title' => 'Анна Каренина',
                'description' => 'Что-то о книге',
                'author_id' => 1
            ],
            [
                'title' => 'Преступление и наказвние',
                'description' => 'Что-то о книге',
                'author_id' => 2
            ],
            [
                'title' => '1984',
                'description' => 'Что-то о книге',
                'author_id' => 3
            ],
            [
                'title' => 'Скотный двор',
                'description' => 'Что-то о книге',
                'author_id' => 3
            ],
            [
                'title' => 'Яркие люди Древней Руси',
                'description' => 'Что-то о книге',
                'author_id' => 4
            ],
            [
                'title' => 'Тревожные люди',
                'description' => 'Что-то о книге',
                'author_id' => 5
            ],
            [
                'title' => 'Жена винодела',
                'description' => 'Что-то о книге',
                'author_id' => 6
            ],
            [
                'title' => 'Жизнь, которая не стала моей',
                'description' => 'Что-то о книге',
                'author_id' => 6
            ],
            [
                'title' => 'Код Давинчи',
                'description' => 'Что-то о книге',
                'author_id' => 7
            ],
            [
                'title' => 'Происхождение',
                'description' => 'Что-то о книге',
                'author_id' => 7
            ],
            [
                'title' => 'Институт',
                'description' => 'Что-то о книге',
                'author_id' => 8
            ]
        ];

        foreach ($books as $book) {
            \App\Models\Book::factory()->create($book);
        }

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

        foreach ($genres as $genre) {
            \App\Models\Genre::factory()->create($genre);
        }

        // ===========================================

        // ===========================================

        $genre_books = [
            [
                'genre_id' => 1,
                'book_id' => 1
            ], [
                'genre_id' => 1,
                'book_id' => 2
            ], [
                'genre_id' => 1,
                'book_id' => 3
            ], [
                'genre_id' => 1,
                'book_id' => 4
            ], [
                'genre_id' => 1,
                'book_id' => 5
            ], [
                'genre_id' => 2,
                'book_id' => 1
            ], [
                'genre_id' => 2,
                'book_id' => 2
            ], [
                'genre_id' => 2,
                'book_id' => 3
            ], [
                'genre_id' => 2,
                'book_id' => 6
            ], [
                'genre_id' => 3,
                'book_id' => 4
            ], [
                'genre_id' => 3,
                'book_id' => 5
            ], [
                'genre_id' => 3,
                'book_id' => 7
            ], [
                'genre_id' => 3,
                'book_id' => 8
            ], [
                'genre_id' => 3,
                'book_id' => 9
            ], [
                'genre_id' => 3,
                'book_id' => 10
            ], [
                'genre_id' => 3,
                'book_id' => 11
            ], [
                'genre_id' => 3,
                'book_id' => 12
            ], [
                'genre_id' => 4,
                'book_id' => 7
            ], [
                'genre_id' => 4,
                'book_id' => 8
            ], [
                'genre_id' => 4,
                'book_id' => 9
            ], [
                'genre_id' => 4,
                'book_id' => 10
            ], [
                'genre_id' => 4,
                'book_id' => 11
            ], [
                'genre_id' => 4,
                'book_id' => 12
            ], [
                'genre_id' => 5,
                'book_id' => 10
            ], [
                'genre_id' => 5,
                'book_id' => 11
            ], [
                'genre_id' => 5,
                'book_id' => 12
            ], [
                'genre_id' => 6,
                'book_id' => 10
            ], [
                'genre_id' => 6,
                'book_id' => 11
            ]
        ];

        foreach ($genre_books as $el) {
            \App\Models\BookGenre::factory()->create($el);
        }

        // ===========================================
    }
}
