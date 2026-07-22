import { cn } from "../../utils";

function Skeleton({ className, ...props }) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-slate-200",
                className
            )}
            {...props}
        />
    );
}

function LoadingSkeleton({ type = "card", count = 1, className }) {
    if (type === "table") {
        return (
            <div className={cn("space-y-3", className)}>
                <div className="flex gap-4">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-20" />
                </div>
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="flex gap-4">
                        <Skeleton className="h-12 flex-1" />
                        <Skeleton className="h-12 w-24" />
                        <Skeleton className="h-12 w-20" />
                        <Skeleton className="h-12 w-16" />
                    </div>
                ))}
            </div>
        );
    }

    if (type === "card") {
        return (
            <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                        <Skeleton className="h-4 w-1/3 mb-3" />
                        <Skeleton className="h-8 w-1/2 mb-2" />
                        <Skeleton className="h-3 w-2/3" />
                    </div>
                ))}
            </div>
        );
    }

    if (type === "list") {
        return (
            <div className={cn("space-y-3", className)}>
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-1.5">
                            <Skeleton className="h-4 w-1/3" />
                            <Skeleton className="h-3 w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return null;
}

export { LoadingSkeleton, Skeleton };