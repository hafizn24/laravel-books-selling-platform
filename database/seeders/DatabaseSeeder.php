<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // ✅ Seed roles and permissions
        $this->call(RoleSeeder::class);

        // ✅ Seed categories
        $this->call(CategorySeeder::class);

        // ✅ Seed books
        $this->call(BookSeeder::class);

        // ✅ Create a test user and assign seller role
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

    }
}
