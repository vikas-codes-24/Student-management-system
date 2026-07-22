import { cn } from "../../utils";

function Card({ className, children, padding = true, hover = false, ...props }) {
    return (
        <div
            className={cn(
                "bg-white rounded-xl border border-slate-200 shadow-sm",
                padding && "p-5",
                hover && "transition-all duration-200 hover:shadow-md hover:border-slate-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function CardHeader({ className, children, ...props }) {
    return (
        <div
            className={cn("flex items-center justify-between mb-4", className)}
            {...props}
        >
            {children}
        </div>
    );
}

function CardTitle({ className, children, ...props }) {
    return (
        <h3
            className={cn("text-lg font-semibold text-slate-900", className)}
            {...props}
        >
            {children}
        </h3>
    );
}

function CardDescription({ className, children, ...props }) {
    return (
        <p
            className={cn("mt-1 text-sm text-slate-500", className)}
            {...props}
        >
            {children}
        </p>
    );
}

function CardContent({ className, children, ...props }) {
    return (
        <div className={cn("", className)} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ className, children, ...props }) {
    return (
        <div
            className={cn(
                "flex items-center justify-end gap-3 mt-4 pt-4 border-t border-slate-100",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };