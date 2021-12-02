<?php

namespace App\Observers;

use App\Models\Users;
use Illuminate\Support\Facades\Hash;

class UserObserver
{
    public function creating(Users $user)
    {
        if (empty($user['password'])) $user['password'] = Hash::make("password");
        $user['role'] = isset($user['role']) || empty($user['role']) ? 'user' : $user['role'];
        $user['disabled'] = isset($user['disabled']) && !empty($user['role']) || (bool)$user['disabled'];
    }
}
