<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Users extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    public $timestamps = false;
    public const FILL_ABLE_FIELDS = [
        'fullName',
        'firstName',
        'lastName',
        'phoneNumber',
        'email',
        'disabled',
        'role',
        'avatarFile',
        'password',
        'emailVerified',
        'emailVerificationToken',
        'emailVerificationTokenExpiresAt',
        'passwordResetToken',
        'passwordResetTokenExpiresAt',
        'google_id',
    ];

    protected $fillable = self::FILL_ABLE_FIELDS;

    protected $hidden = [
        'password',
        'remember_token',
        'avatarFile'
    ];

    protected $casts = [
        'emailVerificationTokenExpiresAt' => 'datetime',
    ];

    public function avatar()
    {
        return $this->morphMany(Files::class, 'belongsTo')->where('belongsTo_column', '=', 'avatar');
    }

    public static function getAllUsers()
    {
        return self::query()
            ->select([
                'id',
                'firstName',
                'lastName',
                'phoneNumber',
                'email',
                'role',
                'disabled'
            ])
            ->get();
    }

    public function getAvatarAttribute(): array
    {
        return [
        [
            'publicUrl' => config('app.url') . Storage::url($this->avatarFile)
        ],
            'length' => true
        ];
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims(): array
    {
        return [];
    }
}
    
