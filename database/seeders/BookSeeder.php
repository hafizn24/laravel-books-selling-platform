<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\User;
use App\Models\Category;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Hafiz',
            'email' => 'hafizn24@gmail.com',
            'password' => Hash::make('admin123'),
        ]);

        $user->assignRole(Role::findByName('admin'));

        $category = Category::create([
            'ct_title' => 'Fiction',
            'ct_description' => 'Stories, novels, and imaginative writing.',
            'ct_created_at' => now(),
            'ct_updated_at' => now(),
        ]);

        $books = [
            [
                'bk_title' => 'The Laravel Handbook',
                'bk_description' => 'A comprehensive guide to mastering Laravel.',
                'bk_price' => 49.99,
                'bk_stock' => 100,
                'bk_approval' => 'pending',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
                'bk_image' => 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            ],
            [
                'bk_title' => 'React for Beginners',
                'bk_description' => 'Learn React step-by-step with practical examples.',
                'bk_price' => 39.99,
                'bk_stock' => 50,
                'bk_approval' => 'reject',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
                'bk_image' => 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            ],
            [
                'bk_title' => 'Docker Deep Dive',
                'bk_description' => 'Master containerization and DevOps workflows.',
                'bk_price' => 59.99,
                'bk_stock' => 75,
                'bk_approval' => 'approve',
                'bk_created_at' => now(),
                'bk_updated_at' => now(),
                'bk_image' => 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            ],
        ];

        foreach ($books as $data) {
            $imageUrl = $data['bk_image'];
            unset($data['bk_image']);

            $book = Book::create([
                ...$data,
                'bk_user_id' => $user->id,
                'bk_ct_id' => $category->ct_id,
            ]);

            $book->addMediaFromUrl($imageUrl)->toMediaCollection('covers');
        }

    }
}