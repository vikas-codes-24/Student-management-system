import { forwardRef } from "react";
import { cn } from "../../utils";

const TextareaField = forwardRef(function TextareaField(
    { className, label, error, helperText, required, rows = 4, ...props },
    ref
) {
    const id = props.id || props.name;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                    {label}
                    {required && <span className="text-danger ml-0.5">*</span>}
                </label>
            )}
            <textarea
                ref={ref}
                id={id}
                rows={rows}
                className={cn(
                    "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400",
                    "transition-all duration-150 resize-y min-h-[80px]",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                    "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500",
                    error && "border-danger focus:border-danger focus:ring-danger/30",
                    className
                )}
                required={required}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-danger">{error}</p>}
            {helperText && !error && (
                <p className="mt-1 text-xs text-slate-500">{helperText}</p>
            )}
        </div>
    );
});

TextareaField.displayName = "TextareaField";

export { TextareaField };