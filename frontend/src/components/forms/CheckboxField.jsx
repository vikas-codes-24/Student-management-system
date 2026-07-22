import { forwardRef } from "react";
import { cn } from "../../utils";

const CheckboxField = forwardRef(function CheckboxField(
    { className, label, error, helperText, required, ...props },
    ref
) {
    const id = props.id || props.name;

    return (
        <div className="w-full">
            <div className="flex items-start gap-2.5">
                <input
                    ref={ref}
                    type="checkbox"
                    id={id}
                    className={cn(
                        "mt-0.5 h-4 w-4 rounded border-slate-300 text-primary-600",
                        "focus:ring-2 focus:ring-primary-500 focus:ring-offset-1",
                        "transition-colors cursor-pointer",
                        error && "border-danger",
                        className
                    )}
                    {...props}
                />
                {label && (
                    <label
                        htmlFor={id}
                        className="text-sm text-slate-700 cursor-pointer select-none"
                    >
                        {label}
                        {required && <span className="text-danger ml-0.5">*</span>}
                    </label>
                )}
            </div>
            {error && <p className="mt-1 text-xs text-danger ml-6">{error}</p>}
            {helperText && !error && (
                <p className="mt-1 text-xs text-slate-500 ml-6">{helperText}</p>
            )}
        </div>
    );
});

CheckboxField.displayName = "CheckboxField";

export { CheckboxField };