<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PasswordResetNotification extends Notification
{
    use Queueable;

    public function __construct()
    {
        //
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $password = Str::random();
        $notifiable->update([
            'password' => Hash::make($password),
            'emailVerified' => true
        ]);

        return (new MailMessage)
            ->subject('Password Reset')
            ->greeting("Hello, {$notifiable->firstName}!'")
            ->line("Login: {$notifiable->email}")
            ->line("Password: $password")
            ->action('Go to project', config('app.front_url'));
    }
}
