import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "../../components/common/Button";
import { TextField } from "../../components/forms/TextField";

function ForgotPassword() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <div className="mb-6 text-center">
                <h1 className="text-xl font-bold text-slate-900">Reset password</h1>
                <p className="mt-1 text-sm text-slate-500">
                    {submitted
                        ? "Check your email for a reset link"
                        : "Enter your email and we'll send you a reset link"}
                </p>
            </div>
            {submitted ? (
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mx-auto mb-4">
                        <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-4">
                        If an account exists with that email, you'll receive a password reset link shortly.
                    </p>
                    <Button
                        variant="secondary"
                        onClick={() => setSubmitted(false)}
                        className="w-full"
                    >
                        Send again
                    </Button>
                </div>
            ) : (
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                    }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        icon={Mail}
                        required
                    />
                    <Button type="submit" className="w-full">
                        Send reset link
                    </Button>
                </form>
            )}
            <div className="mt-6 text-center">
                <Link
                    to="/auth/login"
                    className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to sign in
                </Link>
            </div>
        </div>
    );
}

export { ForgotPassword };