import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "../../utils";
import { Card } from "../common/Card";

const activityIcons = {
    student: "bg-indigo-50 text-indigo-600",
    fee: "bg-emerald-50 text-emerald-600",
    attendance: "bg-amber-50 text-amber-600",
    class: "bg-sky-50 text-sky-600",
    teacher: "bg-purple-50 text-purple-600",
    default: "bg-slate-50 text-slate-500",
};

function RecentActivity({ className, activities = [], title = "Recent Activity", ...props }) {
    return (
        <Card className={cn("", className)} animate>
            <Card.Header>
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>Latest updates from your institute</Card.Description>
                </div>
                <button className="flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
                    View all
                    <ArrowRight className="h-3 w-3" />
                </button>
            </Card.Header>
            <Card.Content>
                {activities.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3">
                            <Clock className="h-6 w-6 text-slate-300" />
                        </div>
                        <p className="text-sm font-medium text-slate-500">No recent activity</p>
                        <p className="text-xs text-slate-400 mt-1">Activities will appear here as they happen</p>
                    </div>
                ) : (
                    <div className="space-y-0">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className={cn(
                                    "flex items-start gap-3.5 py-3.5 transition-colors hover:bg-slate-50/50 rounded-lg px-2 -mx-2",
                                    index < activities.length - 1 && "border-b border-slate-50"
                                )}
                            >
                                <div className={cn(
                                    "flex h-9 w-9 items-center justify-center rounded-xl flex-shrink-0 transition-colors",
                                    activityIcons[activity.type] || activityIcons.default
                                )}>
                                    {activity.icon ? (
                                        <activity.icon className="h-4.5 w-4.5" />
                                    ) : (
                                        <Clock className="h-4 w-4" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900">
                                        {activity.title}
                                    </p>
                                    {activity.description && (
                                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                            {activity.description}
                                        </p>
                                    )}
                                </div>
                                {activity.time && (
                                    <span className="text-[11px] text-slate-400 flex-shrink-0 mt-0.5 font-medium">
                                        {activity.time}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </Card.Content>
        </Card>
    );
}

export { RecentActivity };