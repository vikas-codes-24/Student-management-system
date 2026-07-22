import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils";
import { Card } from "../common/Card";

function QuickActionCard({
    className,
    title,
    description,
    icon: Icon,
    path,
    color = "primary",
    ...props
}) {
    const navigate = useNavigate();

    const colorClasses = {
        primary: "bg-primary-50 text-primary-600",
        success: "bg-emerald-50 text-emerald-600",
        warning: "bg-amber-50 text-amber-600",
        danger: "bg-red-50 text-red-600",
        info: "bg-blue-50 text-blue-600",
    };

    return (
        <Card
            hover
            className={cn("cursor-pointer", className)}
            onClick={() => path && navigate(path)}
            {...props}
        >
            <div className="flex items-center gap-4">
                <div
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        colorClasses[color]
                    )}
                >
                    <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    {description && (
                        <p className="text-xs text-slate-500 mt-0.5 truncate">
                            {description}
                        </p>
                    )}
                </div>
                <ArrowRight className="h-4 w-4 text-slate-300 flex-shrink-0" />
            </div>
        </Card>
    );
}

export { QuickActionCard };