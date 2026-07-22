import { motion } from "framer-motion";
import {
    Building2,
    CheckCircle,
    XCircle,
    Users,
    GraduationCap,
    DollarSign,
    CreditCard,
    Clock,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { cn } from "../../../utils";

const stats = [
    { label: "Total Institutes", value: "256", icon: Building2, trend: "up", trendValue: "12%", color: "primary" },
    { label: "Active Institutes", value: "218", icon: CheckCircle, trend: "up", trendValue: "8%", color: "success" },
    { label: "Inactive Institutes", value: "38", icon: XCircle, trend: "down", trendValue: "3%", color: "danger" },
    { label: "Total Students", value: "48,592", icon: Users, trend: "up", trendValue: "15%", color: "primary" },
    { label: "Total Teachers", value: "4,827", icon: GraduationCap, trend: "up", trendValue: "10%", color: "info" },
    { label: "Monthly Revenue", value: "$125,430", icon: DollarSign, trend: "up", trendValue: "22%", color: "success" },
    { label: "Active Subscriptions", value: "218", icon: CreditCard, trend: "up", trendValue: "6%", color: "primary" },
    { label: "Pending Renewals", value: "23", icon: Clock, trend: "down", trendValue: "5%", color: "warning" },
];

const colorMap = {
    primary: { bg: "bg-blue-50", text: "text-blue-600", icon: "text-blue-600" },
    success: { bg: "bg-emerald-50", text: "text-emerald-600", icon: "text-emerald-600" },
    danger: { bg: "bg-red-50", text: "text-red-600", icon: "text-red-600" },
    info: { bg: "bg-cyan-50", text: "text-cyan-600", icon: "text-cyan-600" },
    warning: { bg: "bg-amber-50", text: "text-amber-600", icon: "text-amber-600" },
};

const recentInstitutes = [
    { name: "Springfield Elementary", students: 450, status: "active", date: "2 hours ago" },
    { name: "Riverside High School", students: 890, status: "active", date: "5 hours ago" },
    { name: "Maple Grove Academy", students: 320, status: "pending", date: "1 day ago" },
    { name: "Oakwood International", students: 670, status: "active", date: "2 days ago" },
    { name: "Sunrise Public School", students: 520, status: "pending", date: "3 days ago" },
];

const recentActivity = [
    { action: "New institute registered", detail: "Pinecrest Academy", time: "30 min ago", type: "create" },
    { action: "Subscription renewed", detail: "Riverside High School", time: "1 hour ago", type: "renew" },
    { action: "Payment received", detail: "$4,500 from Springfield", time: "3 hours ago", type: "payment" },
    { action: "New plan created", detail: "Enterprise Plus Plan", time: "5 hours ago", type: "create" },
    { action: "Institute deactivated", detail: "Hilltop School", time: "1 day ago", type: "deactivate" },
];

const activityColors = {
    create: "bg-blue-100 text-blue-600",
    renew: "bg-emerald-100 text-emerald-600",
    payment: "bg-violet-100 text-violet-600",
    deactivate: "bg-red-100 text-red-600",
};

function Dashboard() {
    return (
        <div>
            <PageHeader
                title="Super Admin Dashboard"
                description="Overview of the entire platform"
            />

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const colors = colorMap[stat.color];
                    const StatIcon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                            <Card hover className="relative overflow-hidden">
                                <div className="flex items-start justify-between">
                                    <div className={cn("rounded-lg p-2.5", colors.bg)}>
                                        <StatIcon className={cn("h-5 w-5", colors.icon)} />
                                    </div>
                                    <span className={cn(
                                        "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
                                        stat.trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                                    )}>
                                        {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                        {stat.trendValue}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Grid */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Revenue Overview */}
                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>Revenue Overview</Card.Title>
                            <Card.Description>Monthly revenue for the current year</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="flex flex-col items-center justify-center py-8">
                            <DollarSign className="h-12 w-12 text-slate-300" />
                            <p className="mt-3 text-sm text-slate-500">Revenue chart will be displayed here</p>
                            <p className="mt-1 text-xs text-slate-400">Connect a charting library to visualize data</p>
                        </div>
                    </Card.Content>
                </Card>

                {/* Institute Growth */}
                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>Institute Growth</Card.Title>
                            <Card.Description>New institutes over time</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="flex flex-col items-center justify-center py-8">
                            <TrendingUp className="h-12 w-12 text-slate-300" />
                            <p className="mt-3 text-sm text-slate-500">Growth chart will be displayed here</p>
                            <p className="mt-1 text-xs text-slate-400">Connect a charting library to visualize data</p>
                        </div>
                    </Card.Content>
                </Card>

                {/* Recent Institutes */}
                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>Recent Institutes</Card.Title>
                            <Card.Description>Latest registered institutes</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="space-y-3">
                            {recentInstitutes.map((institute) => (
                                <div
                                    key={institute.name}
                                    className="flex items-center justify-between rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 font-semibold text-sm">
                                            {institute.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{institute.name}</p>
                                            <p className="text-xs text-slate-500">{institute.students} students</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                            institute.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                                        )}>
                                            {institute.status}
                                        </span>
                                        <span className="text-xs text-slate-400">{institute.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card.Content>
                </Card>

                {/* Recent Activity */}
                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>Recent Activity</Card.Title>
                            <Card.Description>Latest platform activity</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="space-y-1">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                                >
                                    <div className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-full",
                                        activityColors[activity.type]
                                    )}>
                                        <div className="h-2 w-2 rounded-full bg-current" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                                        <p className="text-xs text-slate-500">{activity.detail}</p>
                                    </div>
                                    <span className="text-xs text-slate-400 whitespace-nowrap">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}

export { Dashboard };