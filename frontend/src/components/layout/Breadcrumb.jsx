import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../utils";

const routeLabels = {
    dashboard: "Dashboard",
    students: "Students",
    teachers: "Teachers",
    classes: "Classes",
    attendance: "Attendance",
    parents: "Parents",
    fees: "Fees",
    reports: "Reports",
    settings: "Settings",
    add: "Add",
    edit: "Edit",
    details: "Details",
    login: "Login",
    "forgot-password": "Forgot Password",
};

function Breadcrumb({ className, items, ...props }) {
    const location = useLocation();

    const segments = items || location.pathname.split("/").filter(Boolean);

    return (
        <nav
            className={cn("flex items-center gap-1.5 text-sm", className)}
            {...props}
        >
            <Link
                to="/dashboard"
                className="flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
                <Home className="h-4 w-4" />
            </Link>
            {segments.length > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            )}
            {segments.map((segment, index) => {
                const path = "/" + segments.slice(0, index + 1).join("/");
                const label =
                    routeLabels[segment] ||
                    segment.charAt(0).toUpperCase() + segment.slice(1);
                const isLast = index === segments.length - 1;

                return (
                    <span key={segment} className="flex items-center gap-1.5">
                        {isLast ? (
                            <span className="text-slate-900 font-medium">
                                {label}
                            </span>
                        ) : (
                            <>
                                <Link
                                    to={path}
                                    className="text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    {label}
                                </Link>
                                <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                            </>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

export { Breadcrumb };