import { cn } from "../../utils";

const statusStyles = {
    active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 before:bg-emerald-500",
    inactive: "bg-slate-50 text-slate-600 ring-slate-500/20 before:bg-slate-400",
    pending: "bg-amber-50 text-amber-700 ring-amber-600/20 before:bg-amber-500",
    rejected: "bg-red-50 text-red-700 ring-red-600/20 before:bg-red-500",
    approved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 before:bg-emerald-500",
    draft: "bg-slate-50 text-slate-600 ring-slate-500/20 before:bg-slate-400",
    archived: "bg-slate-50 text-slate-500 ring-slate-400/20 before:bg-slate-400",
    paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 before:bg-emerald-500",
    unpaid: "bg-amber-50 text-amber-700 ring-amber-600/20 before:bg-amber-500",
    overdue: "bg-red-50 text-red-700 ring-red-600/20 before:bg-red-500",
    present: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 before:bg-emerald-500",
    absent: "bg-red-50 text-red-700 ring-red-600/20 before:bg-red-500",
    late: "bg-amber-50 text-amber-700 ring-amber-600/20 before:bg-amber-500",
    leave: "bg-blue-50 text-blue-700 ring-blue-600/20 before:bg-blue-500",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 before:bg-emerald-500",
    warning: "bg-amber-50 text-amber-700 ring-amber-600/20 before:bg-amber-500",
    error: "bg-red-50 text-red-700 ring-red-600/20 before:bg-red-500",
    info: "bg-blue-50 text-blue-700 ring-blue-600/20 before:bg-blue-500",
};

function StatusBadge({ className, status = "active", label, dot = true, ...props }) {
    const resolvedLabel =
        label || (typeof status === "string" ? status.charAt(0).toUpperCase() + status.slice(1) : status);

    return (
        <span
            className={cn(
                "badge-premium ring-1 ring-inset",
                dot && "gap-1.5",
                statusStyles[status] || statusStyles.active,
                className
            )}
            {...props}
        >
            {dot && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            )}
            {resolvedLabel}
        </span>
    );
}

export { StatusBadge };