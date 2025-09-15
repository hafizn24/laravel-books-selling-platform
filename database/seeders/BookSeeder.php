<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::insert([
            [
                'bk_title' => 'The Laravel Handbook',
                'bk_description' => 'A comprehensive guide to mastering Laravel.',
                'bk_price' => 49.99,
                'bk_stock' => 100,
                'bk_approval' => 'pending',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
            ],
            [
                'bk_title' => 'React for Beginners',
                'bk_description' => 'Learn React step-by-step with practical examples.',
                'bk_price' => 39.99,
                'bk_stock' => 50,
                'bk_approval' => 'reject',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
            ],
            [
                'bk_title' => 'Docker Deep Dive',
                'bk_description' => 'Master containerization and DevOps workflows.',
                'bk_price' => 59.99,
                'bk_stock' => 75,
                'bk_approval' => 'approve',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
            ],
        ]);
    }
}
