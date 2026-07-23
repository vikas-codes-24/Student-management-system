import { motion } from "framer-motion";
import { cn } from "../../utils";

function Card({ className, children, padding = true, hover = false, animate = false, ...props }) {
    const Component = animate ? motion.div : "div";
    const motionProps = animate ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-30px" },
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
    } : {};

    return (
        <Component
            className={cn(
                "card-premium",
                padding && "p-5 lg:p-6",
                hover && "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-primary-100/60",
                className
            )}
            {...motionProps}
            {...props}
        >
            {children}
        </Component>
    );
}

function CardHeader({ className, children, ...props }) {
    return (
        <div
            className={cn("flex items-center justify-between mb-5", className)}
            {...props}
        >
            {children}
        </div>
    );
}

function CardTitle({ className, children, ...props }) {
    return (
        <h3
            className={cn("text-base font-semibold text-slate-900 tracking-tight", className)}
            {...props}
        >
            {children}
        </h3>
    );
}

function CardDescription({ className, children, ...props }) {
    return (
        <p
            className={cn("mt-0.5 text-sm text-slate-500", className)}
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
                "flex items-center justify-end gap-3 mt-5 pt-4 border-t border-slate-100",
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