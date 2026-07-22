import { cn } from "../../utils";

const statusStyles = {
    active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    inactive: "bg-slate-50 text-slate-600 ring-slate-500/20",
    pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
    rejected: "bg-red-50 text-red-700 ring-red-600/20",
    approved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    draft: "bg-slate-50 text-slate-600 ring-slate-500/20",
    archived: "bg-slate-50 text-slate-500 ring-slate-400/20",
    paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    unpaid: "bg-amber-50 text-amber-700 ring-amber-600/20",
    overdue: "bg-red-50 text-red-700 ring-red-600/20",
    present: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    absent: "bg-red-50 text-red-700 ring-red-600/20",
    late: "bg-amber-50 text-amber-700 ring-amber-600/20",
    leave: "bg-blue-50 text-blue-700 ring-blue-600/20",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
    error: "bg-red-50 text-red-700 ring-red-600/20",
    info: "bg-blue-50 text-blue-700 ring-blue-600/20",
};

function StatusBadge({ className, status = "active", label, ...props }) {
    const resolvedLabel =
        label || (typeof status === "string" ? status.charAt(0).toUpperCase() + status.slice(1) : status);

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                statusStyles[status] || statusStyles.active,
                className
            )}
            {...props}
        >
            {resolvedLabel}
        </span>
    );
}

export { StatusBadge };