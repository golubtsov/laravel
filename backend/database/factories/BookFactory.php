<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Book' . $this->faker->name,
            'description' => 'about book',
            'author_id' => $this->faker->numberBetween(1, 4)
        ];
    }
}
