import { NavLink, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const isMobile = useMediaQuery("(max-width: 1023px)");

    const sidebarContent = (
        <div
            className={cn(
                "flex h-full flex-col bg-slate-900",
                isCollapsed && !isMobile ? "w-[68px]" : "w-64"
            )}
        >
            {/* Logo */}
            <div
                className={cn(
                    "flex h-16 items-center border-b border-white/5 px-5",
                    isCollapsed && !isMobile && "justify-center px-0"
                )}
            >
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                        <Shield className="h-4 w-4 text-white" />
                    </div>
                    {(!isCollapsed || isMobile) && (
                        <div>
                            <span className="text-base font-semibold text-white">SMP</span>
                            <span className="ml-1.5 rounded bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-medium text-indigo-300">Admin</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-hide">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={isMobile ? close : undefined}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                        isCollapsed && !isMobile && "justify-center px-2",
                                        isActive
                                            ? "bg-indigo-600 text-white shadow-sm"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    )}
                                >
                                    <item.icon className="h-5 w-5 flex-shrink-0" />
                                    {(!isCollapsed || isMobile) && (
                                        <span>{item.label}</span>
                                    )}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Collapse Toggle (desktop only) */}
            {!isMobile && (
                <div className="border-t border-white/5 px-3 py-3">
                    <button
                        onClick={toggleCollapse}
                        className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        {isCollapsed ? (
                            <ChevronRight className="h-4 w-4" />
                        ) : (
                            <>
                                <ChevronLeft className="h-4 w-4" />
                                <span>Collapse</span>
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Logout */}
            <div className="border-t border-white/5 px-3 py-3">
                <button
                    className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white w-full",
                        isCollapsed && !isMobile && "justify-center px-2"
                    )}
                >
                    <LogOut className="h-5 w-5 flex-shrink-0" />
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
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />
                        <motion.aside
                            className="fixed inset-y-0 left-0 z-50 w-64 shadow-xl"
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="relative h-full">
                                <button
                                    onClick={close}
                                    className="absolute -right-10 top-4 p-2 text-white hover:bg-white/10 rounded-lg"
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
                "fixed inset-y-0 left-0 z-30 hidden lg:block bg-slate-900 shadow-xl transition-all duration-300",
                isCollapsed ? "w-[68px]" : "w-64"
            )}
        >
            {sidebarContent}
        </aside>
    );
}

export { SuperAdminSidebar };