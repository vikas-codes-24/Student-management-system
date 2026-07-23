import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils";

function TablePagination({
    className,
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    onPageChange,
    ...props
}) {
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    return (
        <div
            className={cn(
                "flex items-center justify-between px-4 py-3.5 border-t border-slate-100 bg-slate-50/30",
                className
            )}
            {...props}
        >
            <p className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">{startItem}</span>
                {" "}to{" "}
                <span className="font-medium text-slate-700">{endItem}</span>
                {" "}of{" "}
                <span className="font-medium text-slate-700">{totalItems}</span>
            </p>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                        if (totalPages <= 7) return true;
                        if (page === 1 || page === totalPages) return true;
                        if (Math.abs(page - currentPage) <= 1) return true;
                        return false;
                    })
                    .map((page, index, filteredPages) => {
                        const showEllipsis =
                            index > 0 && page - filteredPages[index - 1] > 1;
                        return (
                            <span key={page} className="flex items-center">
                                {showEllipsis && (
                                    <span className="px-1 text-sm text-slate-400">...</span>
                                )}
                                <button
                                    onClick={() => onPageChange(page)}
                                    className={cn(
                                        "min-w-[32px] h-8 rounded-lg text-sm font-medium transition-all duration-150",
                                        page === currentPage
                                            ? "bg-primary-600 text-white shadow-sm shadow-primary-200"
                                            : "text-slate-500 hover:bg-white hover:text-slate-700"
                                    )}
                                >
                                    {page}
                                </button>
                            </span>
                        );
                    })}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

export { TablePagination };