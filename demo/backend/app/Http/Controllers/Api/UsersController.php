<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Users;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;
use App\Repositories\UsersRepositoryInterface;

class UsersController extends Controller
{
    private Repository $config;
    protected UsersRepositoryInterface $usersRepository;
    protected Request $request;

    public function __construct(UsersRepositoryInterface $usersRepository, Request $request, Repository $config)
    {
        $this->usersRepository = $usersRepository;
        $this->request = $request;
        $this->config = $config;
        $this->middleware('auth:api')
            ->except(['signinGoogle', 'callbackGoogle', 'verifyEmail', 'sendVerifyEmail']);
    }

    public function index()
    {
        return [
            'rows' => Users::getAllUsers(),
        ];
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $payload = $this->usersRepository->create(Arr::only($request->all(), Users::FILL_ABLE_FIELDS), auth()->user());

        return response($payload, 201);
    }

    public function show(Users $user)
    {
        $user->load();

        return $user;
    }

    public function edit(Users $user)
    {
        //
    }

    public function update($id, Request $request)
    {
        try {
            $payload = $this->usersRepository->update(
                $id,
                Arr::only($request->all(), [
                    'firstName',
                    'lastName',
                    'phoneNumber',
                    'email'
                    ]),
                auth()->user());
            return response($payload);
        } catch (Exception $e) {
            return response(['message' => $e->getMessage()]);
        }
    }

    public function destroy(Users $user)
    {
        $user->delete();
    }

    public function signinGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function callbackGoogle()
    {
        $socialUser = Socialite::driver('google')->stateless()->user();
        $user = Users::firstOrCreate(['google_id', $socialUser->id], [
            'firstName' => $socialUser->name,
            'email' => $socialUser->email,
            'google_id' => $socialUser->id,
            'password' => Hash::make('password'),
            'emailVerified' => true,
            'emailVerificationTokenExpiresAt' => Carbon::now(),
            'role' => 'admin'
        ]);

        Auth::login($user);

        return redirect($this->config->get('app.front_url') . '/#/login?token=' . auth()->login($user));
    }

    public function sendVerifyEmail()
    {
        return response();
    }

    public function verifyEmail(Request $request)
    {
        $user = Users::query()
            ->where('id', $request->id)
            ->where('emailVerificationToken', $request->hash)
            ->where('emailVerificationTokenExpiresAt', '<', Carbon::now()->addHour())
            ->first();

        if ($user) {
            $user->update(['emailVerified' => true, 'emailVerificationTokenExpiresAt' => Carbon::now()]);
            return redirect($this->config->get('app.front_url') . '/#/login?message=success');
        }

        return redirect($this->config->get('app.front_url') . '/#/login?message=success');
    }
    

    public function findAllAutocomplete()
    {
        $payload = $this->usersRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

