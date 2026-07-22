import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "../../components/common/Button";
import { TextField } from "../../components/forms/TextField";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="mb-6 text-center">
                <h1 className="text-xl font-bold text-slate-900">Sign in</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Welcome back to Student Management Portal
                </p>
            </div>
            <form className="space-y-4">
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <div className="relative">
                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[38px] text-slate-400 hover:text-slate-600"
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-slate-600">Remember me</span>
                    </label>
                    <Link
                        to="/auth/forgot-password"
                        className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                        Forgot password?
                    </Link>
                </div>
                <Button type="submit" className="w-full" icon={LogIn}>
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export { Login };