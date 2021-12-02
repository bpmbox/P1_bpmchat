<?php

namespace Database\Seeders;

use App\Models\Users;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        Users::query()->updateOrCreate(['email' => 'admin@flatlogic.com'], [
            'firstName' => 'firstName',
            'lastName' => 'lastName',
            'phoneNumber' => '777777777777',
            'role' => 'admin',
            'emailVerified' => true,
            'password' => Hash::make('password')
        ]);
    }
}
