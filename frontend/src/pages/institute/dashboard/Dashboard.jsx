import { Users, GraduationCap, BookOpen, Wallet, TrendingUp } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { StatsCard } from "../../../components/dashboard/StatsCard";
import { WelcomeBanner } from "../../../components/dashboard/WelcomeBanner";
import { QuickActionCard } from "../../../components/dashboard/QuickActionCard";
import { RecentActivity } from "../../../components/dashboard/RecentActivity";

const stats = [
    { title: "Total Students", value: "1,234", icon: Users, trend: "up", trendValue: "12%", trendLabel: "vs last month" },
    { title: "Total Teachers", value: "48", icon: GraduationCap, trend: "up", trendValue: "4%", trendLabel: "vs last month" },
    { title: "Active Classes", value: "24", icon: BookOpen, trend: "up", trendValue: "8%", trendLabel: "vs last month" },
    { title: "Revenue", value: "$48,250", icon: Wallet, trend: "up", trendValue: "16%", trendLabel: "vs last month" },
];

const quickActions = [
    { title: "Add New Student", description: "Enroll a new student", icon: Users, path: "/institute/students/add", color: "primary" },
    { title: "Mark Attendance", description: "Record today's attendance", icon: BookOpen, path: "/institute/attendance/mark", color: "success" },
    { title: "Create Class", description: "Set up a new class", icon: GraduationCap, path: "/institute/classes/add", color: "info" },
    { title: "Collect Fees", description: "Process fee payments", icon: Wallet, path: "/institute/fees", color: "warning" },
];

function Dashboard() {
    return (
        <div>
            <WelcomeBanner
                title="Welcome back, John!"
                description="Here's what's happening with your institution today."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <StatsCard key={stat.title} {...stat} />
                ))}
            </div>
            <div className="mt-6">
                <PageHeader
                    title="Quick Actions"
                    showBreadcrumb={false}
                />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {quickActions.map((action) => (
                        <QuickActionCard key={action.title} {...action} />
                    ))}
                </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <RecentActivity />
                <RecentActivity />
            </div>
        </div>
    );
}

export { Dashboard };