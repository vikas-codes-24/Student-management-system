import { Inbox } from "lucide-react";
import { cn } from "../../utils";

function EmptyState({
    className,
    icon: Icon = Inbox,
    title = "No data found",
    description,
    action,
    ...props
}) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-16 px-4",
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Icon className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            {description && (
                <p className="mt-1 text-sm text-slate-500 max-w-sm text-center">
                    {description}
                </p>
            )}
            {action && <div className="mt-4">{action}</div>}
        </div>
    );
}

export { EmptyState };