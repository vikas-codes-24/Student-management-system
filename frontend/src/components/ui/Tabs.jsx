import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

function Tabs({
    className,
    tabs,
    defaultIndex = 0,
    onChange,
    variant = "underline",
    ...props
}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        onChange?.(index);
    };

    return (
        <div className={cn("w-full", className)} {...props}>
            <div
                className={cn(
                    "flex",
                    variant === "underline"
                        ? "border-b border-slate-200"
                        : variant === "pills"
                            ? "gap-1 p-1 bg-slate-100 rounded-xl"
                            : "gap-1"
                )}
            >
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={cn(
                            "relative whitespace-nowrap text-sm font-medium transition-colors",
                            variant === "underline" &&
                            "px-4 py-2.5 text-slate-500 hover:text-slate-900",
                            variant === "pills" &&
                            "px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900",
                            activeIndex === index &&
                            variant === "underline" &&
                            "text-primary-600",
                            activeIndex === index &&
                            variant === "pills" &&
                            "bg-white text-slate-900 shadow-sm"
                        )}
                    >
                        {activeIndex === index && variant === "underline" && (
                            <motion.div
                                layoutId="tab-indicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <div className="flex items-center gap-2">
                            {tab.icon && <tab.icon className="h-4 w-4" />}
                            {tab.label}
                            {tab.badge && (
                                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-slate-200 text-slate-600">
                                    {tab.badge}
                                </span>
                            )}
                        </div>
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[activeIndex]?.content || tabs[activeIndex]?.children}
            </div>
        </div>
    );
}

export { Tabs };