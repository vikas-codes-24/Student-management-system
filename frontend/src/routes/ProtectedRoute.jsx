import { Navigate, Outlet } from "react-router-dom";

/**
 * ProtectedRoute component.
 * Currently allows all access. Will be updated with authentication logic later.
 */
function ProtectedRoute() {
    // TODO: Replace with actual auth check
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
}

export { ProtectedRoute };