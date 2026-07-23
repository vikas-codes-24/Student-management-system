<?php

namespace Database\Seeders;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reuse the same test tenant created by InstituteAdminSeeder
        $tenant = Tenant::firstOrCreate(
            ['email' => 'contact@testinstitute.com'],
            [
                'name' => 'Test Institute',
                'slug' => 'test-institute',
                'phone' => '9999999999',
                'address' => '123 Main Street',
                'city' => 'Kanpur',
                'state' => 'Uttar Pradesh',
                'country' => 'India',
                'pincode' => '208001',
                'is_active' => true,
            ]
        );

        $user = User::firstOrCreate(
            ['email' => 'teacher@testinstitute.com'],
            [
                'tenant_id' => $tenant->id,
                'name' => 'Test Teacher',
                'password' => bcrypt('Teacher@123'),
                'is_active' => true,
            ]
        );

        $user->assignRole('TEACHER');
    }
}