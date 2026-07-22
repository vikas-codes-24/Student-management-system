import { AlertTriangle } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "./Button";

function ErrorState({
    className,
    title = "Something went wrong",
    description = "An unexpected error occurred. Please try again.",
    onRetry,
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
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
                <AlertTriangle className="h-8 w-8 text-danger" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            {description && (
                <p className="mt-1 text-sm text-slate-500 max-w-sm text-center">
                    {description}
                </p>
            )}
            {onRetry && (
                <Button variant="outline" size="sm" onClick={onRetry} className="mt-4">
                    Try again
                </Button>
            )}
        </div>
    );
}

export { ErrorState };