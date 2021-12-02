<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        $images = collect(Storage::disk('public_url')->files('assets/products'))
            ->transform(fn($f) => Storage::disk('public_url')->url($f))->toArray();

        return [
            'title' => $this->faker->word,
            'subtitle' => $this->faker->word,
            'rating' => $this->faker->randomElement([1, 2, 3, 4, 5]),
            'price' => $this->faker->randomFloat(0, 0, 1000),
            'img' => $this->faker->randomElement($images),
        ];
    }
}
