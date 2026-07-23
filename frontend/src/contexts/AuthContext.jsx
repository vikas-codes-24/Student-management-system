import { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../utils/api";

const AuthContext = createContext(undefined);

/**
 * Expected API response shapes:
 *   POST /login  → { success, message, data: { user, token } }
 *   GET  /me     → { success, message, data: { user } }
 *   POST /logout → { success, message }
 */

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [isLoading, setIsLoading] = useState(true);

    // On mount (or when token changes), validate token via /me
    useEffect(() => {
        if (!token) {
            setIsLoading(false);
            return;
        }

        let cancelled = false;
        setIsLoading(true);

        api
            .get("/me")
            .then((res) => {
                if (cancelled) return;
                const userData = res.data.data;
                setUser(userData);
            })
            .catch(() => {
                // Token invalid / expired — clear everything
                if (!cancelled) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setToken(null);
                    setUser(null);
                }
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []); // only run on mount (token is stable from localStorage on first render)

    const login = useCallback(async (email, password) => {
        const res = await api.post("/login", { email, password });
        const { user: userData, token: newToken } = res.data.data;

        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);

        return res.data;
    }, []);

    const logout = useCallback(async () => {
        try {
            await api.post("/logout");
        } catch {
            // Even if the server call fails, clear local state
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    }, []);

    const isAuthenticated = !!user && !!token;

    const value = {
        user,
        token,
        isAuthenticated,
        isLoading,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export { AuthProvider, useAuth };