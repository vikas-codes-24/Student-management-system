import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils";

const variants = {
    primary:
        "gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/25 focus:ring-indigo-500",
    secondary:
        "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-primary-500 shadow-sm",
    danger:
        "bg-danger text-white hover:bg-red-600 focus:ring-red-500 shadow-sm",
    ghost:
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500",
    outline:
        "bg-transparent text-primary-600 border border-primary-200 hover:bg-primary-50 hover:border-primary-300 focus:ring-primary-500",
};

const sizes = {
    xs: "px-2.5 py-1.5 text-xs rounded-lg",
    sm: "px-3.5 py-2 text-sm rounded-xl",
    md: "px-4 py-2.5 text-sm rounded-xl",
    lg: "px-5 py-3 text-base rounded-xl",
    xl: "px-6 py-3.5 text-base rounded-xl",
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
                "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
                "active:scale-[0.97]",
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