import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils";

function QuickActionCard({
    className,
    title,
    description,
    icon: Icon,
    path,
    color = "primary",
    ...props
}) {
    const navigate = useNavigate();

    const colorClasses = {
        primary: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100 group-hover:border-indigo-200",
        success: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200",
        warning: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200",
        danger: "bg-red-50 text-red-600 border-red-100 group-hover:bg-red-100 group-hover:border-red-200",
        info: "bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-100 group-hover:border-sky-200",
    };

    return (
        <motion.div
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
        >
            <div
                className={cn(
                    "group relative overflow-hidden card-premium cursor-pointer p-5",
                    "hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-primary-100/60",
                    className
                )}
                onClick={() => path && navigate(path)}
                {...props}
            >
                <div className="flex items-center gap-4">
                    <div
                        className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-all duration-200 group-hover:scale-110",
                            colorClasses[color]
                        )}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900">{title}</p>
                        {description && (
                            <p className="text-xs text-slate-500 mt-0.5 truncate">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-200">
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export { QuickActionCard };