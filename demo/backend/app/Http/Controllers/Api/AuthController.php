<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Notifications\PasswordResetNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

class AuthController extends Controller
{
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->middleware('auth:api', [
            'except' => ['login', 'signup', 'sendPasswordResetEmail']
        ]);
        $this->request = $request;
    }

    public function login()
    {
        $credentials = $this->request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        /** @var Users $user */
        $user = auth()->user();
        if ($user->emailVerified) {
            $payload = JWTFactory::user(['id' => $user->id])->make();
            return JWTAuth::encode($payload);
        }

        return response(['message' => 'user not found'], 404);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function sendPasswordResetEmail()
    {
        /** @var Users $user */
        $user = Users::query()
            ->where('email', $this->request->get('email'))
            ->first();
        if ($user) {
            $user->notify(new PasswordResetNotification);
            return response(['message' => 'success']);
        }

        return response(['message' => 'user not found'], 404);
    }


    public function me()
    {
        $user = auth()->user();
        return response()->json($user->only([
                'id',
                'firstName',
                'lastName',
                'phoneNumber',
                'email',
                'role',
                'disabled'
            ]) + ['avatar' => $user->avatar]);
    }

    public function signup()
    {
        /** @var Users $user */
        $user = Users::query()->where('email', $this->request->get('email'))->first();
        if (!$user) {
            /** @var Users $user */
            $user = Users::query()->create([
                'email' => $this->request->get('email'),
                'password' => Hash::make($this->request->get('password')),
                'role' => 'admin'
            ]);
            $user->sendEmailVerificationNotification();
            return ['message' => 'register success'];
        }

        return response(['error' => 'user exist'], 400);
    }

    public function passwordUpdate()
    {
        $credentials = ['email' => auth()->user()->email, 'password' => $this->request->get('currentPassword')];
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        auth()->user()->update(['password' => Hash::make($this->request->get('newPassword'))]);
        return response()->json([]);
    }
}
