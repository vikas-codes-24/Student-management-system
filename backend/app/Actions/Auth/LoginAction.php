<?php

namespace App\Actions\Auth;

use App\Services\AuthService;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Validation\ValidationException;

class LoginAction
{
    public function __construct(
        private readonly AuthService $authService
    ) {}

    /**
     * Execute the login action.
     *
     * @throws ValidationException
     */
    public function execute(LoginRequest $request): array
    {
        return $this->authService->login($request->validated());
    }
}