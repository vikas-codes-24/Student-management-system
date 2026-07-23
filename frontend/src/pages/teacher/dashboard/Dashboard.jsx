import { motion } from "framer-motion";
import { Users, BookOpen, CalendarCheck, Clock, TrendingUp, Activity } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { StatsCard } from "../../../components/dashboard/StatsCard";
import { WelcomeBanner } from "../../../components/dashboard/WelcomeBanner";
import { QuickActionCard } from "../../../components/dashboard/QuickActionCard";
import { RecentActivity } from "../../../components/dashboard/RecentActivity";
import { Card } from "../../../components/common/Card";
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area,
} from "recharts";

const stats = [
    { title: "My Classes", value: "4", icon: BookOpen, trend: "up", trendValue: "0", trendLabel: "this semester", color: "primary" },
    { title: "Total Students", value: "128", icon: Users, trend: "up", trendValue: "8%", trendLabel: "vs last semester", color: "success" },
    { title: "Attendance Rate", value: "94%", icon: CalendarCheck, trend: "up", trendValue: "2%", trendLabel: "vs last month", color: "info" },
    { title: "Hours This Week", value: "24", icon: Clock, trend: "up", trendValue: "4", trendLabel: "scheduled hours", color: "warning" },
];

const quickActions = [
    { title: "Mark Attendance", description: "Record today's attendance", icon: CalendarCheck, path: "/teacher/attendance/mark", color: "primary" },
    { title: "View Timetable", description: "Check your schedule", icon: Clock, path: "/teacher/timetable", color: "success" },
    { title: "My Classes", description: "View assigned classes", icon: BookOpen, path: "/teacher/classes", color: "info" },
    { title: "My Students", description: "View student list", icon: Users, path: "/teacher/students", color: "warning" },
];

const attendanceData = [
    { month: "Jan", rate: 92 },
    { month: "Feb", rate: 88 },
    { month: "Mar", rate: 94 },
    { month: "Apr", rate: 90 },
    { month: "May", rate: 95 },
    { month: "Jun", rate: 91 },
    { month: "Jul", rate: 93 },
    { month: "Aug", rate: 96 },
    { month: "Sep", rate: 94 },
    { month: "Oct", rate: 97 },
    { month: "Nov", rate: 95 },
    { month: "Dec", rate: 96 },
];

const performanceData = [
    { month: "Jan", average: 78 },
    { month: "Feb", average: 82 },
    { month: "Mar", average: 80 },
    { month: "Apr", average: 85 },
    { month: "May", average: 83 },
    { month: "Jun", average: 87 },
    { month: "Jul", average: 84 },
    { month: "Aug", average: 88 },
    { month: "Sep", average: 86 },
    { month: "Oct", average: 90 },
    { month: "Nov", average: 89 },
    { month: "Dec", average: 91 },
];

const recentActivities = [
    { title: "Attendance marked", description: "Grade 10-A - 28 present, 2 absent", time: "1 hour ago", type: "attendance" },
    { title: "Assignment graded", description: "Mathematics - 45 papers graded", time: "3 hours ago", type: "class" },
    { title: "New student added", description: "Emily Clark joined Grade 10-A", time: "1 day ago", type: "student" },
    { title: "Class rescheduled", description: "Physics lab moved to Thursday", time: "2 days ago", type: "class" },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg px-3 py-2 text-sm">
                <p className="font-medium text-slate-900 mb-1">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-slate-600">
                        <span className="inline-block h-2 w-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }} />
                        {entry.name}: <span className="font-semibold text-slate-900">{entry.value}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

function Dashboard() {
    return (
        <div className="space-y-6">
            <WelcomeBanner
                title="Welcome back, Teacher!"
                description="Here's your teaching overview for today."
                instituteName="Springfield Institute of Excellence"
                stats={[
                    { label: "My Classes", value: "4" },
                    { label: "Students", value: "128" },
                    { label: "Attendance", value: "94%" },
                ]}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Attendance Rate</Card.Title>
                            <Card.Description>Monthly class attendance trend</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <Activity className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">96%</span>
                            <span>this month</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={attendanceData}>
                                    <defs>
                                        <linearGradient id="teacherAttGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[80, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} fill="url(#teacherAttGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Student Performance</Card.Title>
                            <Card.Description>Average class performance trend</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">+13%</span>
                            <span>this year</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={performanceData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[70, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="average" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: '#6366f1', strokeWidth: 2, r: 3 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900 tracking-tight">Quick Actions</h2>
                        <p className="text-sm text-slate-500 mt-0.5">Common teaching tasks</p>
                    </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {quickActions.map((action) => (
                        <QuickActionCard key={action.title} {...action} />
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <RecentActivity activities={recentActivities} title="Recent Activity" />
            </motion.div>
        </div>
    );
}

export { Dashboard };