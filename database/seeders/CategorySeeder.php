<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::insert([
            [
                'ct_title' => 'Science',
                'ct_description' => 'Books about physics, biology, and discoveries.',
                'ct_created_at' => now(),
                'ct_updated_at' => now(),
            ],
            [
                'ct_title' => 'History',
                'ct_description' => 'Historical accounts and biographies.',
                'ct_created_at' => now(),
                'ct_updated_at' => now(),
            ],
        ]);
    }
}