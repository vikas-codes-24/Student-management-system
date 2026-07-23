<?php

namespace Database\Seeders;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Seeder;

class InstituteAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create or reuse the test tenant
        $tenant = Tenant::firstOrCreate(
            [
                'slug' => 'test-institute',
            ],
            [
                'name' => 'Test Institute',
                'email' => 'contact@testinstitute.com',
                'is_active' => true,
            ]
        );

        // Create or reuse the institute admin user
        $user = User::firstOrCreate(
            [
                'email' => 'instituteadmin@testinstitute.com',
            ],
            [
                'name' => 'Institute Admin',
                'password' => bcrypt('Admin@123'),
                'tenant_id' => $tenant->id,
                'is_active' => true,
            ]
        );

        $user->assignRole('INSTITUTE_ADMIN');
    }
}