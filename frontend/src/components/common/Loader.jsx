import { cn } from "../../utils";

function Loader({ className, fullScreen = false, ...props }) {
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-3">
                    <div
                        className={cn(
                            "h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600",
                            className
                        )}
                        {...props}
                    />
                    <p className="text-sm text-slate-500">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "flex items-center justify-center py-12",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary-600",
                    className
                )}
            />
        </div>
    );
}

export { Loader };