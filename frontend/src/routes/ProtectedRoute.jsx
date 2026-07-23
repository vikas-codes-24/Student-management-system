import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingSpinner } from "../components/common/LoadingSpinner";

/**
 * ProtectedRoute component.
 * Redirects unauthenticated users to login.
 * Shows a loading spinner while the /me check is resolving.
 * Enforces role-based access: blocks users from routes outside their role.
 */
function ProtectedRoute() {
    const { isAuthenticated, isLoading, user } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-surface">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />;
    }

    // Role-based route enforcement
    const path = location.pathname;
    const role = user?.role;

    if (role === "TEACHER") {
        // Teachers can only access /teacher/* routes
        if (!path.startsWith("/teacher")) {
            return <Navigate to="/teacher/dashboard" replace />;
        }
    } else {
        // Non-teachers (SUPER_ADMIN, INSTITUTE_ADMIN) cannot access /teacher/* routes
        if (path.startsWith("/teacher")) {
            if (role === "SUPER_ADMIN") {
                return <Navigate to="/super-admin/dashboard" replace />;
            }
            return <Navigate to="/institute/dashboard" replace />;
        }
    }

    return <Outlet />;
}

export { ProtectedRoute };