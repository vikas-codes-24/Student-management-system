import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../../components/common/Button";
import { TextField } from "../../components/forms/TextField";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setServerError("");
        setIsSubmitting(true);

        try {
            const result = await login(email, password);
            const role = result?.data?.user?.role;
            if (role === "SUPER_ADMIN") {
                navigate("/super-admin/dashboard", { replace: true });
            } else if (role === "TEACHER") {
                navigate("/teacher/dashboard", { replace: true });
            } else {
                navigate("/institute/dashboard", { replace: true });
            }
        } catch (err) {
            if (err.response?.status === 422) {
                // Validation errors from the API
                setErrors(err.response.data.errors || {});
            } else if (err.response?.data?.message) {
                setServerError(err.response.data.message);
            } else {
                setServerError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="mb-6 text-center">
                <h1 className="text-xl font-bold text-slate-900">Sign in</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Welcome back to Student Management Portal
                </p>
            </div>

            {serverError && (
                <div className="mb-4 rounded-lg bg-danger/10 border border-danger/20 px-4 py-3 text-sm text-danger">
                    {serverError}
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email?.[0]}
                />
                <div className="relative">
                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password?.[0]}
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
                <Button
                    type="submit"
                    className="w-full"
                    icon={LogIn}
                    isLoading={isSubmitting}
                >
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export { Login };