import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils";

const variants = {
    primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
    secondary:
        "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-primary-500 shadow-sm",
    danger:
        "bg-danger text-white hover:bg-red-600 focus:ring-red-500 shadow-sm",
    ghost:
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500",
    outline:
        "bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 focus:ring-primary-500",
};

const sizes = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base",
};

const Button = forwardRef(function Button(
    {
        className,
        variant = "primary",
        size = "md",
        isLoading = false,
        loadingText,
        disabled = false,
        children,
        icon: Icon,
        iconPosition = "left",
        ...props
    },
    ref
) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            ref={ref}
            disabled={isDisabled}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {loadingText || children}
                </>
            ) : (
                <>
                    {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
                    {children}
                    {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
                </>
            )}
        </button>
    );
});

Button.displayName = "Button";

export { Button };