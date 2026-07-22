import { Clock } from "lucide-react";
import { cn } from "../../utils";
import { Card } from "../common/Card";

function RecentActivity({ className, activities = [], ...props }) {
    return (
        <Card className={cn("", className)} {...props}>
            <Card.Header>
                <Card.Title>Recent Activity</Card.Title>
            </Card.Header>
            <Card.Content>
                {activities.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <Clock className="h-8 w-8 text-slate-300 mb-2" />
                        <p className="text-sm text-slate-500">No recent activity</p>
                    </div>
                ) : (
                    <div className="space-y-1">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-0"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 flex-shrink-0">
                                    {activity.icon || (
                                        <Clock className="h-4 w-4 text-slate-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-slate-900">
                                        {activity.title}
                                    </p>
                                    {activity.description && (
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {activity.description}
                                        </p>
                                    )}
                                </div>
                                {activity.time && (
                                    <span className="text-xs text-slate-400 flex-shrink-0">
                                        {activity.time}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </Card.Content>
        </Card>
    );
}

export { RecentActivity };