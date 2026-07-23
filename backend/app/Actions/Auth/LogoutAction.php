<?php

namespace App\Actions\Auth;

use App\Models\User;
use App\Services\AuthService;

class LogoutAction
{
    public function __construct(
        private readonly AuthService $authService
    ) {}

    /**
     * Execute the logout action.
     */
    public function execute(User $user): void
    {
        $this->authService->logout($user);
    }
}