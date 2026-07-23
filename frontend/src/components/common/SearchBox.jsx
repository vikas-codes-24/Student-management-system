import { Search, X } from "lucide-react";
import { cn } from "../../utils";

function SearchBox({
    className,
    value,
    onChange,
    onClear,
    placeholder = "Search...",
    ...props
}) {
    return (
        <div className={cn("relative", className)}>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cn(
                    "block w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-9 py-2.5 text-sm text-slate-900 placeholder-slate-400",
                    "transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300 focus:bg-white focus:shadow-sm"
                )}
                {...props}
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}

export { SearchBox };