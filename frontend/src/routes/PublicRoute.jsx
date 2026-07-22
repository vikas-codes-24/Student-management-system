import { Navigate, Outlet } from "react-router-dom";

/**
 * PublicRoute component.
 * Redirects authenticated users to dashboard.
 */
function PublicRoute() {
    // TODO: Replace with actual auth check
    const isAuthenticated = false;

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}

export { PublicRoute };