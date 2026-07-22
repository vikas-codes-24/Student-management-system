import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils";

const SelectField = forwardRef(function SelectField(
    { className, label, error, helperText, options = [], placeholder = "Select...", required, ...props },
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
            <div className="relative">
                <select
                    ref={ref}
                    id={id}
                    className={cn(
                        "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900",
                        "transition-all duration-150 appearance-none",
                        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                        "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500",
                        error && "border-danger focus:border-danger focus:ring-danger/30",
                        className
                    )}
                    required={required}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {error && <p className="mt-1 text-xs text-danger">{error}</p>}
            {helperText && !error && (
                <p className="mt-1 text-xs text-slate-500">{helperText}</p>
            )}
        </div>
    );
});

SelectField.displayName = "SelectField";

export { SelectField };