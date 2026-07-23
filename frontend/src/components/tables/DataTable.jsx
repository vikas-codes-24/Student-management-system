import { motion } from "framer-motion";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../../utils";
import { LoadingSkeleton } from "../common/LoadingSkeleton";
import { EmptyState } from "../common/EmptyState";
import { TablePagination } from "./TablePagination";

function DataTable({
    className,
    columns,
    data,
    isLoading,
    onRowClick,
    pagination,
    sortColumn,
    sortDirection,
    onSort,
    emptyState,
    ...props
}) {
    if (isLoading) {
        return <LoadingSkeleton type="table" count={5} className={cn("rounded-2xl", className)} />;
    }

    if (!data || data.length === 0) {
        return (
            <div className="card-premium overflow-hidden">
                <EmptyState
                    title={emptyState?.title || "No data found"}
                    description={emptyState?.description || "No records to display."}
                    action={emptyState?.action}
                />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("card-premium overflow-hidden", className)}
        >
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-100" {...props}>
                    <thead>
                        <tr className="bg-slate-50/70">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    style={column.width ? { width: column.width } : undefined}
                                    className={cn(
                                        "px-4 py-3.5 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider",
                                        column.sortable && "cursor-pointer select-none hover:text-slate-700",
                                        column.className
                                    )}
                                    onClick={() => {
                                        if (column.sortable && onSort) {
                                            onSort(column.key);
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-1.5">
                                        {column.label}
                                        {column.sortable && (
                                            <span className="text-slate-300">
                                                {sortColumn === column.key ? (
                                                    sortDirection === "asc" ? (
                                                        <ArrowUp className="h-3 w-3 text-primary-500" />
                                                    ) : (
                                                        <ArrowDown className="h-3 w-3 text-primary-500" />
                                                    )
                                                ) : (
                                                    <ArrowUpDown className="h-3 w-3" />
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.map((row, rowIndex) => (
                            <motion.tr
                                key={row.id || rowIndex}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: rowIndex * 0.02, duration: 0.2 }}
                                onClick={() => onRowClick?.(row)}
                                className={cn(
                                    "transition-colors duration-150",
                                    onRowClick
                                        ? "cursor-pointer hover:bg-slate-50"
                                        : "hover:bg-slate-50/50"
                                )}
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={cn(
                                            "px-4 py-3.5 text-sm text-slate-700 whitespace-nowrap",
                                            column.cellClassName
                                        )}
                                    >
                                        {column.render
                                            ? column.render(row[column.key], row, rowIndex)
                                            : row[column.key]}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {pagination && (
                <TablePagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalItems={pagination.totalItems}
                    pageSize={pagination.pageSize}
                    onPageChange={pagination.onPageChange}
                />
            )}
        </motion.div>
    );
}

export { DataTable };