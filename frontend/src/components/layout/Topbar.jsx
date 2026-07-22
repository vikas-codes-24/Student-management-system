import { cn } from "../../utils";

function Topbar({ className, children, ...props }) {
    return (
        <div
            className={cn(
                "flex items-center justify-between gap-4 mb-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { Topbar };