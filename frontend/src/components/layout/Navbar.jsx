import { useState } from "react";
import { Menu, Bell, Search, Sun, Moon } from "lucide-react";
import { cn } from "../../utils";
import { useSidebar } from "../../contexts/SidebarContext";
import { useMediaQuery } from "../../hooks";
import { Avatar } from "../common/Avatar";
import { Dropdown } from "../ui/Dropdown";

function Navbar({ className, ...props }) {
    const { isOpen, toggle } = useSidebar();
    const isMobile = useMediaQuery("(max-width: 1023px)");

    return (
        <header
            className={cn(
                "sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/95 backdrop-blur-sm px-4 lg:px-6",
                className
            )}
            {...props}
        >
            {/* Mobile menu toggle */}
            {isMobile && (
                <button
                    onClick={toggle}
                    className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                >
                    <Menu className="h-5 w-5" />
                </button>
            )}

            {/* Search */}
            <div className="hidden sm:flex relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-colors"
                />
            </div>

            <div className="flex items-center gap-2 ml-auto">
                {/* Notifications */}
                <button className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white" />
                </button>

                {/* Profile */}
                <Dropdown
                    align="right"
                    width="md"
                    trigger={
                        <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                            <Avatar name="John Doe" size="sm" />
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-medium text-slate-900 leading-tight">
                                    John Doe
                                </p>
                                <p className="text-xs text-slate-500 leading-tight">
                                    Admin
                                </p>
                            </div>
                        </button>
                    }
                >
                    <Dropdown.Label>Account</Dropdown.Label>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
            </div>
        </header>
    );
}

export { Navbar };