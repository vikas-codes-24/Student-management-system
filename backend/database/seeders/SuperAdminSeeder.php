<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::firstOrCreate(
            [
                'email' => 'admin@studentportal.com',
            ],
            [
                'name' => 'Super Admin',
                'password' => bcrypt('Admin@123'),
                'is_active' => true,
            ]
        );

        $user->assignRole('SUPER_ADMIN');
    }
}