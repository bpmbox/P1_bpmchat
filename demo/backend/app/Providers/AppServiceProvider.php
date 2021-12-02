<?php

namespace App\Providers;

use App\Models;
use App\Observers;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public function register()
    {
        //
    }

    public function boot()
    {
        // todo fix
        // Models\User::observe(Observers\UserObserver::class);
    }
}
