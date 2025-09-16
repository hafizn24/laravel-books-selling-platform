<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $admin = Role::create(['name' => 'admin']);
        $seller = Role::create(['name' => 'seller']);

        Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        Role::firstOrCreate(['name' => 'seller', 'guard_name' => 'web']);

        // will change by time
        $permissions = [
            'dashboard',
            'register.books',
            'pending.approval',
            'book.list',
            'category'
        ];

        foreach ($permissions as $perm) {
            Permission::create(['name' => $perm]);
        }

        $admin->givePermissionTo($permissions);
        $seller->givePermissionTo([
            'dashboard',
            'register.books',
            'book.list',
        ]);

        $anisha = User::factory()->create([
            'name' => 'Anisha',
            'email' => 'anishamansor@gmail.com',
            'password' => Hash::make('anisha123'),
        ]);
        $anisha->assignRole($seller);        
    }
}