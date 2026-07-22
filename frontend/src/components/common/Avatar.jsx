import { cn } from "../../utils";

function Avatar({
    className,
    src,
    alt,
    name,
    size = "md",
    status,
    ...props
}) {
    const sizes = {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-xl",
    };

    const statusSizes = {
        xs: "h-1.5 w-1.5",
        sm: "h-2 w-2",
        md: "h-2.5 w-2.5",
        lg: "h-3 w-3",
        xl: "h-3.5 w-3.5",
    };

    function getInitials(name) {
        if (!name) return "?";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    }

    function getColorFromName(name) {
        if (!name) return "bg-slate-200 text-slate-600";
        const colors = [
            "bg-blue-100 text-blue-700",
            "bg-emerald-100 text-emerald-700",
            "bg-amber-100 text-amber-700",
            "bg-purple-100 text-purple-700",
            "bg-rose-100 text-rose-700",
            "bg-cyan-100 text-cyan-700",
        ];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    }

    return (
        <div className="relative inline-flex">
            {src ? (
                <img
                    src={src}
                    alt={alt || name || "Avatar"}
                    className={cn(
                        "rounded-full object-cover border-2 border-white",
                        sizes[size],
                        className
                    )}
                    {...props}
                />
            ) : (
                <div
                    className={cn(
                        "rounded-full flex items-center justify-center font-medium border-2 border-white",
                        sizes[size],
                        getColorFromName(name),
                        className
                    )}
                    {...props}
                >
                    {getInitials(name)}
                </div>
            )}
            {status && (
                <span
                    className={cn(
                        "absolute bottom-0 right-0 rounded-full ring-2 ring-white",
                        statusSizes[size],
                        status === "online" ? "bg-success" : "bg-slate-400"
                    )}
                />
            )}
        </div>
    );
}

export { Avatar };