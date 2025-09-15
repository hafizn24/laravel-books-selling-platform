<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);
        $sellerRole = Role::create(['name' => 'seller']);

        $permissions = [
            'view_dashboard',
            'create_register_book',
            'view_pending_approval',
            'view_book_list',
            'create_category'
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $adminRole->givePermissionTo(Permission::all());

        $sellerRole->givePermissionTo([
            'view_dashboard',
            'create_register_book',
            'view_pending_approval'
        ]);

        if ($user = User::find(1)) {
            $user->assignRole($adminRole);
        }
    }
}