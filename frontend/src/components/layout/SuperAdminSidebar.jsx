import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Building2,
    CreditCard,
    Receipt,
    Users,
    BarChart3,
    HeadphonesIcon,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    X,
    Shield,
} from "lucide-react";
import { cn } from "../../utils";
import { useSidebar } from "../../contexts/SidebarContext";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "../../hooks";

const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/super-admin/dashboard" },
    { label: "Institutes", icon: Building2, path: "/super-admin/institutes" },
    { label: "Plans", icon: CreditCard, path: "/super-admin/plans" },
    { label: "Subscriptions", icon: Receipt, path: "/super-admin/subscriptions" },
    { label: "Users", icon: Users, path: "/super-admin/users" },
    { label: "Analytics", icon: BarChart3, path: "/super-admin/analytics" },
    { label: "Support", icon: HeadphonesIcon, path: "/super-admin/support" },
    { label: "Settings", icon: Settings, path: "/super-admin/settings" },
];

const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
};

function SuperAdminSidebar() {
    const { isOpen, isCollapsed, close, toggleCollapse } = useSidebar();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery("(max-width: 1023px)");

    const handleLogout = async () => {
        await logout();
        navigate("/auth/login", { replace: true });
    };

    const sidebarContent = (
        <div
            className={cn(
                "flex h-full flex-col bg-[#0b1120]",
                isCollapsed && !isMobile ? "w-[68px]" : "w-64"
            )}
        >
            {/* Logo */}
            <div
                className={cn(
                    "flex h-16 items-center border-b border-white/[0.05] px-5",
                    isCollapsed && !isMobile && "justify-center px-0"
                )}
            >
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary shadow-lg shadow-indigo-500/25">
                        <Shield className="h-4 w-4 text-white" />
                    </div>
                    {(!isCollapsed || isMobile) && (
                        <div className="flex items-center gap-1.5">
                            <span className="text-base font-bold text-white tracking-tight">SMP</span>
                            <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-medium text-amber-300">Admin</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-5 scrollbar-hide">
                <div className="mb-4 px-3">
                    <p className={cn(
                        "text-[11px] font-semibold uppercase tracking-widest text-slate-500/60",
                        isCollapsed && !isMobile && "text-center text-[9px]"
                    )}>
                        {(!isCollapsed || isMobile) ? "Main Menu" : "..."}
                    </p>
                </div>
                <ul className="space-y-0.5">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={isMobile ? close : undefined}
                                    className={cn(
                                        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                        isCollapsed && !isMobile && "justify-center px-2",
                                        isActive
                                            ? "bg-primary-500/10 text-white shadow-sm"
                                            : "text-slate-400 hover:bg-white/[0.05] hover:text-slate-200"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="superadmin-sidebar-active"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full bg-primary-400"
                                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                    <div className={cn(
                                        "flex items-center justify-center h-5 w-5",
                                        isActive && "text-primary-400"
                                    )}>
                                        <item.icon className="h-4.5 w-4.5" />
                                    </div>
                                    {(!isCollapsed || isMobile) && (
                                        <span>{item.label}</span>
                                    )}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-white/[0.05] px-3 py-3 space-y-0.5">
                {!isMobile && (
                    <button
                        onClick={toggleCollapse}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-white/[0.05] hover:text-slate-300 transition-all duration-200"
                    >
                        <div className="flex items-center justify-center h-5 w-5">
                            {isCollapsed ? (
                                <ChevronRight className="h-4 w-4" />
                            ) : (
                                <ChevronLeft className="h-4 w-4" />
                            )}
                        </div>
                        {(!isCollapsed) && <span>Collapse</span>}
                    </button>
                )}

                <button
                    onClick={handleLogout}
                    className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-500/5 hover:text-red-400 transition-all duration-200",
                        isCollapsed && !isMobile && "justify-center px-2"
                    )}
                >
                    <div className="flex items-center justify-center h-5 w-5">
                        <LogOut className="h-4.5 w-4.5" />
                    </div>
                    {(!isCollapsed || isMobile) && <span>Logout</span>}
                </button>
            </div>
        </div>
    );

    // Mobile: render as overlay drawer
    if (isMobile) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />
                        <motion.aside
                            className="fixed inset-y-0 left-0 z-50 w-64 shadow-2xl"
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="relative h-full">
                                <button
                                    onClick={close}
                                    className="absolute -right-10 top-4 p-2 text-white/70 hover:text-white rounded-xl"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                {sidebarContent}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        );
    }

    // Desktop: persistent sidebar
    return (
        <aside
            className={cn(
                "fixed inset-y-0 left-0 z-30 hidden lg:block bg-[#0b1120] shadow-2xl transition-all duration-300",
                isCollapsed ? "w-[68px]" : "w-64"
            )}
        >
            {sidebarContent}
        </aside>
    );
}

export { SuperAdminSidebar };