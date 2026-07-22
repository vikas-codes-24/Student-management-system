import { cn } from "../../utils";
import { Breadcrumb } from "./Breadcrumb";

function PageHeader({
    className,
    title,
    description,
    actions,
    showBreadcrumb = true,
    breadcrumbItems,
    ...props
}) {
    return (
        <div className={cn("mb-6", className)} {...props}>
            {showBreadcrumb && <Breadcrumb items={breadcrumbItems} className="mb-2" />}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-1 text-sm text-slate-500">
                            {description}
                        </p>
                    )}
                </div>
                {actions && <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>}
            </div>
        </div>
    );
}

export { PageHeader };