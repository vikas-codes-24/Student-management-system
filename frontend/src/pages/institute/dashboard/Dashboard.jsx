import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Wallet, TrendingUp, Activity, DollarSign, PieChart } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { StatsCard } from "../../../components/dashboard/StatsCard";
import { WelcomeBanner } from "../../../components/dashboard/WelcomeBanner";
import { QuickActionCard } from "../../../components/dashboard/QuickActionCard";
import { RecentActivity } from "../../../components/dashboard/RecentActivity";
import { Card } from "../../../components/common/Card";
import { cn } from "../../../utils";
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart as RePieChart, Pie, Cell, Legend
} from "recharts";

const stats = [
    { title: "Total Students", value: "1,234", icon: Users, trend: "up", trendValue: "12%", trendLabel: "vs last month", color: "primary" },
    { title: "Total Teachers", value: "48", icon: GraduationCap, trend: "up", trendValue: "4%", trendLabel: "vs last month", color: "success" },
    { title: "Active Classes", value: "24", icon: BookOpen, trend: "up", trendValue: "8%", trendLabel: "vs last month", color: "info" },
    { title: "Revenue", value: "$48,250", icon: Wallet, trend: "up", trendValue: "16%", trendLabel: "vs last month", color: "warning" },
];

const quickActions = [
    { title: "Add New Student", description: "Enroll a new student", icon: Users, path: "/institute/students/add", color: "primary" },
    { title: "Mark Attendance", description: "Record today's attendance", icon: BookOpen, path: "/institute/attendance/mark", color: "success" },
    { title: "Create Class", description: "Set up a new class", icon: GraduationCap, path: "/institute/classes/add", color: "info" },
    { title: "Collect Fees", description: "Process fee payments", icon: Wallet, path: "/institute/fees", color: "warning" },
];

const studentGrowthData = [
    { month: "Jan", students: 980 },
    { month: "Feb", students: 1020 },
    { month: "Mar", students: 1050 },
    { month: "Apr", students: 1080 },
    { month: "May", students: 1120 },
    { month: "Jun", students: 1150 },
    { month: "Jul", students: 1180 },
    { month: "Aug", students: 1200 },
    { month: "Sep", students: 1210 },
    { month: "Oct", students: 1225 },
    { month: "Nov", students: 1230 },
    { month: "Dec", students: 1234 },
];

const attendanceTrendData = [
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

const feeCollectionData = [
    { month: "Jan", collected: 42000, pending: 8000 },
    { month: "Feb", collected: 45000, pending: 6000 },
    { month: "Mar", collected: 48000, pending: 5000 },
    { month: "Apr", collected: 44000, pending: 7000 },
    { month: "May", collected: 50000, pending: 4000 },
    { month: "Jun", collected: 47000, pending: 5500 },
    { month: "Jul", collected: 52000, pending: 3500 },
    { month: "Aug", collected: 49000, pending: 4500 },
    { month: "Sep", collected: 51000, pending: 3000 },
    { month: "Oct", collected: 53000, pending: 2500 },
    { month: "Nov", collected: 48000, pending: 4000 },
    { month: "Dec", collected: 48250, pending: 3500 },
];

const studentsByClassData = [
    { name: "Grade 10", value: 320, color: "#6366f1" },
    { name: "Grade 9", value: 280, color: "#8b5cf6" },
    { name: "Grade 8", value: 250, color: "#a78bfa" },
    { name: "Grade 7", value: 220, color: "#c4b5fd" },
    { name: "Grade 6", value: 164, color: "#ddd6fe" },
];

const recentActivities = [
    { title: "New student enrolled", description: "Sarah Johnson joined Grade 10-A", time: "5 min ago", type: "student" },
    { title: "Fee payment received", description: "$500 from John Smith (Grade 9-B)", time: "1 hour ago", type: "fee" },
    { title: "Attendance marked", description: "Today's attendance is 94% - 3 students absent", time: "2 hours ago", type: "attendance" },
    { title: "New class created", description: "Grade 6-C added with 30 students", time: "4 hours ago", type: "class" },
    { title: "Teacher assigned", description: "Mr. David Wilson assigned to Grade 10 Science", time: "1 day ago", type: "teacher" },
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
            {/* Hero Section */}
            <WelcomeBanner
                title="Welcome back, John!"
                description="Here's what's happening with your institution today."
                instituteName="Springfield Institute of Excellence"
                stats={[
                    { label: "Active Students", value: "1,234" },
                    { label: "Teachers", value: "48" },
                    { label: "Classes", value: "24" },
                ]}
            />

            {/* Stats Cards */}
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

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Student Growth */}
                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Student Growth</Card.Title>
                            <Card.Description>Monthly student enrollment trend</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">+12%</span>
                            <span>this year</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={studentGrowthData}>
                                    <defs>
                                        <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="students" stroke="#6366f1" strokeWidth={2} fill="url(#studentGradient)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Attendance Trend */}
                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Attendance Trend</Card.Title>
                            <Card.Description>Monthly attendance rate</Card.Description>
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
                                <LineChart data={attendanceTrendData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[80, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2.5} dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Fee Collection */}
                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Fee Collection</Card.Title>
                            <Card.Description>Collected vs Pending fees</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="font-medium text-emerald-600">$48,250</span>
                            <span>collected</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={feeCollectionData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="collected" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={20} />
                                    <Bar dataKey="pending" fill="#f59e0b" radius={[4, 4, 0, 0]} maxBarSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>

                {/* Students by Class */}
                <Card animate className="overflow-hidden">
                    <Card.Header>
                        <div>
                            <Card.Title>Students by Class</Card.Title>
                            <Card.Description>Distribution across grades</Card.Description>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-2.5 py-1.5">
                            <PieChart className="h-3.5 w-3.5 text-indigo-500" />
                            <span className="font-medium text-indigo-600">1,234</span>
                            <span>total</span>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="h-64 flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <RePieChart>
                                    <Pie
                                        data={studentsByClassData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={85}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {studentsByClassData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend
                                        verticalAlign="bottom"
                                        height={36}
                                        formatter={(value) => <span className="text-xs text-slate-600">{value}</span>}
                                    />
                                </RePieChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Content>
                </Card>
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900 tracking-tight">Quick Actions</h2>
                        <p className="text-sm text-slate-500 mt-0.5">Common tasks and operations</p>
                    </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {quickActions.map((action) => (
                        <QuickActionCard key={action.title} {...action} />
                    ))}
                </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-2"
            >
                <RecentActivity activities={recentActivities} title="Recent Activity" />
                <RecentActivity activities={recentActivities.slice(0, 4)} title="Latest Updates" />
            </motion.div>
        </div>
    );
}

export { Dashboard };