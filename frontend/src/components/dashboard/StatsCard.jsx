import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { cn } from "../../utils";
import { Card } from "../common/Card";

function StatsCard({
    className,
    title,
    value,
    icon: Icon,
    trend,
    trendValue,
    trendLabel,
    color = "primary",
    ...props
}) {
    const isPositive = trend === "up";

    const colorMap = {
        primary: { bg: "bg-indigo-50", icon: "text-indigo-600", gradient: "from-indigo-500 to-purple-500" },
        success: { bg: "bg-emerald-50", icon: "text-emerald-600", gradient: "from-emerald-500 to-teal-500" },
        warning: { bg: "bg-amber-50", icon: "text-amber-600", gradient: "from-amber-500 to-orange-500" },
        danger: { bg: "bg-red-50", icon: "text-red-600", gradient: "from-red-500 to-rose-500" },
        info: { bg: "bg-sky-50", icon: "text-sky-600", gradient: "from-sky-500 to-blue-500" },
    };

    const colors = colorMap[color] || colorMap.primary;

    return (
        <motion.div
            className={cn("group", className)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            <Card padding="p-5 lg:p-6" className="relative overflow-hidden h-full">
                {/* Gradient accent bar at top */}
                <div className={cn(
                    "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    colors.gradient
                )} />

                <div className="flex items-start justify-between relative">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                        <p className="mt-1.5 text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                            {value}
                        </p>
                        {trend && (
                            <div className="mt-2.5 flex items-center gap-1.5">
                                <span
                                    className={cn(
                                        "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
                                        isPositive
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-red-50 text-red-700"
                                    )}
                                >
                                    {isPositive ? (
                                        <ArrowUpRight className="h-3 w-3" />
                                    ) : (
                                        <ArrowDownRight className="h-3 w-3" />
                                    )}
                                    {trendValue}
                                </span>
                                {trendLabel && (
                                    <span className="text-xs text-slate-400">
                                        {trendLabel}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                    {Icon && (
                        <div className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg",
                            colors.bg,
                            colors.icon
                        )}>
                            <Icon className="h-5 w-5" />
                        </div>
                    )}
                </div>

                {/* Sparkline visualization */}
                <div className="mt-4 flex items-end gap-0.5 h-8">
                    {[35, 45, 25, 55, 40, 60, 50, 70, 55, 75, 65, 80].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.02, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={cn(
                                "flex-1 rounded-sm",
                                isPositive
                                    ? "bg-emerald-200/60 group-hover:bg-emerald-300/70"
                                    : "bg-red-200/60 group-hover:bg-red-300/70",
                                "transition-colors duration-200"
                            )}
                            style={{ maxWidth: 6 }}
                        />
                    ))}
                </div>
            </Card>
        </motion.div>
    );
}

export { StatsCard };