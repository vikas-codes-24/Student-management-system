import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingSpinner } from "../components/common/LoadingSpinner";

/**
 * PublicRoute component.
 * Redirects authenticated users to dashboard.
 * Shows a loading spinner while the /me check is resolving.
 */
function PublicRoute() {
    const { isAuthenticated, isLoading, user } = useAuth();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-surface">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (isAuthenticated) {
        if (user?.role === "SUPER_ADMIN") {
            return <Navigate to="/super-admin/dashboard" replace />;
        } else if (user?.role === "TEACHER") {
            return <Navigate to="/teacher/dashboard" replace />;
        }
        return <Navigate to="/institute/dashboard" replace />;
    }

    return <Outlet />;
}

export { PublicRoute };
