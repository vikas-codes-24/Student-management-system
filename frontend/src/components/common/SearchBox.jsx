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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cn(
                    "block w-full rounded-lg border border-slate-300 bg-white pl-9 pr-8 py-2 text-sm text-slate-900 placeholder-slate-400",
                    "transition-all duration-150",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                )}
                {...props}
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}

export { SearchBox };