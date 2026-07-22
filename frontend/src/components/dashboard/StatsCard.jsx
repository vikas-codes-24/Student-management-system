import { ArrowUpRight, ArrowDownRight } from "lucide-react";
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
    ...props
}) {
    const isPositive = trend === "up";

    return (
        <Card className={cn("", className)} {...props}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <p className="mt-1 text-2xl font-bold text-slate-900 tracking-tight">
                        {value}
                    </p>
                    {trend && (
                        <div className="mt-2 flex items-center gap-1.5">
                            <span
                                className={cn(
                                    "inline-flex items-center gap-0.5 text-xs font-medium",
                                    isPositive ? "text-success" : "text-danger"
                                )}
                            >
                                {isPositive ? (
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                ) : (
                                    <ArrowDownRight className="h-3.5 w-3.5" />
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <Icon className="h-5 w-5" />
                    </div>
                )}
            </div>
        </Card>
    );
}

export { StatsCard };