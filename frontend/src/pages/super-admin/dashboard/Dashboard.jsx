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
    Activity,
    Globe,
    Shield,
} from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { StatsCard } from "../../../components/dashboard/StatsCard";
import { WelcomeBanner } from "../../../components/dashboard/WelcomeBanner";
import { RecentActivity } from "../../../components/dashboard/RecentActivity";
import { StatusBadge } from "../../../components/common/StatusBadge";
import { cn } from "../../../utils";
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from "recharts";

const stats = [
    { label: "Total Institutes", value: "256", icon: Building2, trend: "up", trendValue: "12%", trendLabel: "vs last month", color: "primary" },
    { label: "Active Institutes", value: "218", icon: CheckCircle, trend: "up", trendValue: "8%", trendLabel: "vs last month", color: "success" },
    { label: "Inactive Institutes", value: "38", icon: XCircle, trend: "down", trendValue: "3%", trendLabel: "vs last month", color: "danger" },
    { label: "Total Students", value: "48,592", icon: Users, trend: "up", trendValue: "15%", trendLabel: "vs last month", color: "primary" },
    { label: "Total Teachers", value: "4,827", icon: GraduationCap, trend: "up", trendValue: "10%", trendLabel: "vs last month", color: "info" },
    { label: "Monthly Revenue", value: "$125,430", icon: DollarSign, trend: "up", trendValue: "22%", trendLabel: "vs last month", color: "success" },
    { label: "Active Subscriptions", value: "218", icon: CreditCard, trend: "up", trendValue: "6%", trendLabel: "vs last month", color: "primary" },
    { label: "Pending Renewals", value: "23", icon: Clock, trend: "down", trendValue: "5%", trendLabel: "vs last month", color: "warning" },
];

const revenueData = [
    { month: "Jan", revenue: 85000, cost: 45000 },
    { month: "Feb", revenue: 92000, cost: 48000 },
    { month: "Mar", revenue: 88000, cost: 46000 },
    { month: "Apr", revenue: 95000, cost: 50000 },
    { month: "May", revenue: 100000, cost: 52000 },
    { month: "Jun", revenue: 97000, cost: 49000 },
    { month: "Jul", revenue: 105000, cost: 53000 },
    { month: "Aug", revenue: 110000, cost: 55000 },
    { month: "Sep", revenue: 108000, cost: 54000 },
    { month: "Oct", revenue: 115000, cost: 56000 },
    { month: "Nov", revenue: 120000, cost: 58000 },
    { month: "Dec", revenue: 125430, cost: 60000 },
];

const instituteGrowthData = [
    { month: "Jan", institutes: 180 },
    { month: "Feb", institutes: 190 },
    { month: "Mar", institutes: 195 },
    { month: "Apr", institutes: 205 },
    { month: "May", institutes: 210 },
    { month: "Jun", institutes: 218 },
    { month: "Jul", institutes: 225 },
    { month: "Aug", institutes: 230 },
    { month: "Sep", institutes: 238 },
    { month: "Oct", institutes: 244 },
    { month: "Nov", institutes: 250 },
    { month: "Dec", institutes: 256 },
];

const studentDistributionData = [
    { month: "Jan", students: 38000 },
    { month: "Feb", students: 39500 },
    { month: "Mar", students: 40500 },
    { month: "Apr", students: 42000 },
    { month: "May", students: 43500 },
    { month: "Jun", students: 44500 },
    { month: "Jul", students: 45200 },
    { month: "Aug", students: 46000 },
    { month: "Sep", students: 46800 },
    { month: "Oct", students: 47500 },
    { month: "Nov", students: 48000 },
    { month: "Dec", students: 48592 },
];

const planPerformanceData = [
    { name: "Basic", value: 85 },
    { name: "Standard", value: 120 },
    { name: "Premium", value: 65 },
    { name: "Enterprise", value: 28 },
    { name: "Trial", value: 38 },
];

const recentInstitutes = [
    { name: "Springfield Elementary", students: 450, status: "active", date: "2 hours ago" },
    { name: "Riverside High School", students: 890, status: "active", date: "5 hours ago" },
    { name: "Maple Grove Academy", students: 320, status: "pending", date: "1 day ago" },
    { name: "Oakwood International", students: 670, status: "active", date: "2 days ago" },
    { name: "Sunrise Public School", students: 520, status: "pending", date: "3 days ago" },
];

const recentActivity = [
    { action: "New institute registered", detail: "Pinecrest Academy", time: "30 min ago", type: "student" },
    { action: "Subscription renewed", detail: "Riverside High School", time: "1 hour ago", type: "fee" },
    { action: "Payment received", detail: "$4,500 from Springfield", time: "3 hours ago", type: "fee" },
    { action: "New plan created", detail: "Enterprise Plus Plan", time: "5 hours ago", type: "class" },
    { action: "Institute deactivated", detail: "Hilltop School", time: "1 day ago", type: "attendance" },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg px-3 py-2 text-sm">
                <p className="font-medium text-slate-900 mb-1">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-slate-600">
                        <span className="inline-block h-2 w-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }} />
                        {entry.name}: <span className="font-semibold text-slate-900">{typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

function Dashboard() {
    const colorMap = {
        primary: { bg: "bg-blue-50", text: "text-blue-600", icon: "text-blue-600" },
        success: { bg: "bg-emerald-50", text: "text-emerald-600", icon: "text-emerald-600" },
        danger: { bg: "bg-red-50", text: "text-red-600", icon: "text-red-600" },
        info: { bg: "bg-cyan-50", text: "text-cyan-600", icon: "text-cyan-600" },
        warning: { bg: "bg-amber-50", text: "text-amber-600", icon: "text-amber-600" },
    };

    return (
        <div>
            {/* Hero Section */}
            <WelcomeBanner
                title="Super Admin Dashboard"
                description="Complete overview of your entire platform performance"
                instituteName="Student Management Platform"
                stats={[
                    { label: "Total Institutes", value: "256" },
                    { label: "Total Students", value: "48,592" },
                    { label: "Revenue", value: "$125K" },
                ]}
            />

            {/* Stats Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <StatsCard
                        key={stat.label}
                        title={stat.label}
                        value={stat.value}
                        icon={stat.icon}
                        trend={stat.trend}
                        trendValue={stat.trendValue}
                        trendLabel={stat.trendLabel}
                        color={stat.color}
                    />
                ))}
            </div>

            {/* Charts Grid */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Revenue Overview */}
                <Card animate>
                    <Card.Header>
                        <div>
                            <Card.Title>Revenue Overview</Card.Title>
                            <Card.Description>Monthly revenue vs costs</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">$125,430</span>
                            <span>this month</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="revenue" name="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={20} />
                                    <Bar dataKey="cost" name="Cost" fill="#f59e0b" radius={[4, 4, 0, 0]} maxBarSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Institute Growth */}
                <Card animate>
                    <Card.Header>
                        <div>
                            <Card.Title>Institute Growth</Card.Title>
                            <Card.Description>New institutes over time</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <TrendingUp className="h-3.5 w-3.5 text-indigo-500" />
                            <span className="font-medium text-indigo-600">+42%</span>
                            <span>this year</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={instituteGrowthData}>
                                    <defs>
                                        <linearGradient id="instituteGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="institutes" name="Institutes" stroke="#6366f1" strokeWidth={2} fill="url(#instituteGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Student Distribution */}
                <Card animate>
                    <Card.Header>
                        <div>
                            <Card.Title>Student Distribution</Card.Title>
                            <Card.Description>Total students across all institutes</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <Users className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">48,592</span>
                            <span>total</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={studentDistributionData}>
                                    <defs>
                                        <linearGradient id="studentDistGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="students" name="Students" stroke="#10b981" strokeWidth={2} fill="url(#studentDistGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Plan Performance */}
                <Card animate>
                    <Card.Header>
                        <div>
                            <Card.Title>Plan Performance</Card.Title>
                            <Card.Description>Subscriptions by plan type</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <Shield className="h-3.5 w-3.5 text-indigo-500" />
                            <span className="font-medium text-indigo-600">336</span>
                            <span>active plans</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={planPerformanceData} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="value" name="Subscriptions" fill="#6366f1" radius={[0, 4, 4, 0]} maxBarSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>
            </div>

            {/* Bottom Grid */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Recent Institutes */}
                <Card animate>
                    <Card.Header>
                        <div>
                            <Card.Title>Recent Institutes</Card.Title>
                            <Card.Description>Latest registered institutes</Card.Description>
                        </div>
                        <button className="flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
                            View all
                            <ArrowUpRight className="h-3 w-3" />
                        </button>
                    </Card.Header>
                    <Card.Content>
                        <div className="space-y-2">
                            {recentInstitutes.map((institute, i) => (
                                <motion.div
                                    key={institute.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                    className="flex items-center justify-between rounded-xl border border-slate-100 p-3 transition-all hover:border-slate-200 hover:shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white font-semibold text-sm shadow-sm">
                                            {institute.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{institute.name}</p>
                                            <p className="text-xs text-slate-500">{institute.students.toLocaleString()} students</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <StatusBadge status={institute.status} />
                                        <span className="text-xs text-slate-400">{institute.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card.Content>
                </Card>

                {/* Recent Activity */}
                <RecentActivity
                    activities={recentActivity.map(a => ({
                        title: a.action,
                        description: a.detail,
                        time: a.time,
                        type: a.type
                    }))}
                    title="Recent Activity"
                />
            </div>
        </div>
    );
}

export { Dashboard };