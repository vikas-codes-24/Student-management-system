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
        return <LoadingSkeleton type="table" count={5} className={className} />;
    }

    if (!data || data.length === 0) {
        return (
            <EmptyState
                title={emptyState?.title || "No data found"}
                description={emptyState?.description || "No records to display."}
                action={emptyState?.action}
            />
        );
    }

    return (
        <div className={cn("w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm", className)}>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200" {...props}>
                    <thead>
                        <tr className="bg-slate-50">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    style={column.width ? { width: column.width } : undefined}
                                    className={cn(
                                        "px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider",
                                        column.sortable && "cursor-pointer select-none hover:text-slate-700",
                                        column.className
                                    )}
                                    onClick={() => {
                                        if (column.sortable && onSort) {
                                            onSort(column.key);
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-1">
                                        {column.label}
                                        {column.sortable && sortColumn === column.key && (
                                            <span className="text-primary-600">
                                                {sortDirection === "asc" ? "↑" : "↓"}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((row, rowIndex) => (
                            <tr
                                key={row.id || rowIndex}
                                onClick={() => onRowClick?.(row)}
                                className={cn(
                                    "transition-colors",
                                    onRowClick
                                        ? "cursor-pointer hover:bg-slate-50"
                                        : "hover:bg-slate-50/50"
                                )}
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={cn(
                                            "px-4 py-3 text-sm text-slate-700 whitespace-nowrap",
                                            column.cellClassName
                                        )}
                                    >
                                        {column.render
                                            ? column.render(row[column.key], row)
                                            : row[column.key]}
                                    </td>
                                ))}
                            </tr>
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
        </div>
    );
}

export { DataTable };