import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Bell, Search, ChevronDown, Settings, LogOut, User, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../utils";
import { useSidebar } from "../../contexts/SidebarContext";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "../../hooks";
import { Avatar } from "../common/Avatar";
import { useClickOutside } from "../../hooks";

function Navbar({ className, ...props }) {
    const { toggle } = useSidebar();
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 1023px)");
    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const profileRef = useClickOutside(() => setShowProfile(false));
    const notifRef = useClickOutside(() => setShowNotifications(false));

    const handleLogout = async () => {
        setShowProfile(false);
        await logout();
        navigate("/auth/login", { replace: true });
    };

    const today = new Date();
    const formattedDate = format(today, "EEEE, MMMM d, yyyy");

    const notifications = [
        { id: 1, title: "New student enrolled", description: "Sarah Johnson joined Grade 10", time: "5 min ago", unread: true },
        { id: 2, title: "Attendance marked", description: "Today's attendance is 94%", time: "1 hour ago", unread: true },
        { id: 3, title: "Fee payment received", description: "$500 from John Smith", time: "3 hours ago", unread: false },
    ];

    return (
        <header
            className={cn(
                "sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl px-4 lg:px-6 shadow-sm",
                className
            )}
            {...props}
        >
            {/* Mobile menu toggle */}
            {isMobile && (
                <button
                    onClick={toggle}
                    className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all duration-200"
                >
                    <Menu className="h-5 w-5" />
                </button>
            )}

            {/* Desktop: Date */}
            <div className="hidden md:flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-500 font-medium">{formattedDate}</span>
            </div>

            {/* Search */}
            <div className="hidden sm:flex relative flex-1 max-w-xs ml-auto mr-auto md:mr-0 md:ml-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300 focus:bg-white transition-all duration-200"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-0.5 text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md font-medium">
                    ⌘K
                </div>
            </div>

            <div className="flex items-center gap-1.5">
                {/* Notifications */}
                <div ref={notifRef} className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all duration-200"
                    >
                        <Bell className="h-4.5 w-4.5" />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary-500 ring-2 ring-white" />
                    </button>
                    <AnimatePresence>
                        {showNotifications && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2 overflow-hidden"
                            >
                                <div className="px-4 py-2 border-b border-slate-100">
                                    <p className="text-sm font-semibold text-slate-900">Notifications</p>
                                </div>
                                <div className="max-h-72 overflow-y-auto">
                                    {notifications.map((n) => (
                                        <button
                                            key={n.id}
                                            className="flex items-start gap-3 w-full px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                                        >
                                            <div className={cn(
                                                "flex-shrink-0 h-2 w-2 rounded-full mt-1.5",
                                                n.unread ? "bg-primary-500" : "bg-transparent"
                                            )} />
                                            <div className="flex-1 min-w-0">
                                                <p className={cn(
                                                    "text-sm",
                                                    n.unread ? "font-semibold text-slate-900" : "text-slate-700"
                                                )}>
                                                    {n.title}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-0.5">{n.description}</p>
                                                <p className="text-[11px] text-slate-400 mt-0.5">{n.time}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="px-4 py-2 border-t border-slate-100">
                                    <button className="w-full text-center text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
                                        View all notifications
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Profile */}
                <div ref={profileRef} className="relative">
                    <button
                        onClick={() => setShowProfile(!showProfile)}
                        className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl hover:bg-slate-100 transition-all duration-200"
                    >
                        <Avatar name="John Doe" size="sm" />
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-semibold text-slate-900 leading-tight">
                                John Doe
                            </p>
                            <p className="text-xs text-slate-500 leading-tight">
                                Institute Admin
                            </p>
                        </div>
                        <ChevronDown className="hidden md:block h-3.5 w-3.5 text-slate-400" />
                    </button>
                    <AnimatePresence>
                        {showProfile && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-1.5 overflow-hidden"
                            >
                                <div className="px-4 py-2 border-b border-slate-100 mb-1">
                                    <p className="text-sm font-semibold text-slate-900">{user?.name || "User"}</p>
                                    <p className="text-xs text-slate-500">{user?.email || ""}</p>
                                </div>
                                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    <User className="h-4 w-4 text-slate-400" />
                                    Profile
                                </button>
                                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    <Settings className="h-4 w-4 text-slate-400" />
                                    Settings
                                </button>
                                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                                    <HelpCircle className="h-4 w-4 text-slate-400" />
                                    Help
                                </button>
                                <div className="border-t border-slate-100 mt-1 pt-1">
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Sign out
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}

export { Navbar };