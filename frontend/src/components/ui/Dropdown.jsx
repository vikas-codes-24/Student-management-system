import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";
import { useClickOutside } from "../../hooks";

function Dropdown({
    className,
    trigger,
    children,
    align = "left",
    width = "auto",
    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    const alignClasses = {
        left: "left-0",
        right: "right-0",
        center: "left-1/2 -translate-x-1/2",
    };

    const widthClasses = {
        auto: "w-auto min-w-[180px]",
        sm: "w-40",
        md: "w-56",
        lg: "w-72",
        full: "w-full",
    };

    return (
        <div ref={ref} className={cn("relative inline-block", className)} {...props}>
            <div onClick={toggle} className="cursor-pointer">
                {trigger || (
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        Options
                        <ChevronDown className="h-4 w-4" />
                    </button>
                )}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -4 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -4 }}
                        transition={{ duration: 0.12 }}
                        className={cn(
                            "absolute z-50 mt-1 rounded-xl border border-slate-200 bg-white shadow-lg py-1",
                            alignClasses[align],
                            widthClasses[width] || widthClasses.auto
                        )}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropdownItem({ className, children, icon: Icon, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex w-full items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                className
            )}
            {...props}
        >
            {Icon && <Icon className="h-4 w-4 text-slate-400" />}
            {children}
        </button>
    );
}

function DropdownDivider({ className, ...props }) {
    return (
        <div
            className={cn("my-1 border-t border-slate-100", className)}
            {...props}
        />
    );
}

function DropdownLabel({ className, children, ...props }) {
    return (
        <div
            className={cn("px-3 py-1.5 text-xs font-medium text-slate-500 uppercase tracking-wider", className)}
            {...props}
        >
            {children}
        </div>
    );
}

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Label = DropdownLabel;

export { Dropdown };