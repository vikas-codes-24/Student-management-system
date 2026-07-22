import { TrendingUp, Users, Building2, DollarSign, Activity } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { cn } from "../../../utils";

const metrics = [
    { label: "Active Users", value: "4,827", change: "+12%", icon: Users, color: "bg-blue-50 text-blue-600" },
    { label: "Avg. Revenue per Institute", value: "$490", change: "+8%", icon: DollarSign, color: "bg-emerald-50 text-emerald-600" },
    { label: "Institute Growth Rate", value: "15.3%", change: "+2.1%", icon: Building2, color: "bg-violet-50 text-violet-600" },
    { label: "Platform Uptime", value: "99.97%", change: "99.9%", icon: Activity, color: "bg-cyan-50 text-cyan-600" },
];

function Analytics() {
    return (
        <div>
            <PageHeader
                title="Analytics"
                description="Platform analytics and insights"
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                    <Card key={metric.label}>
                        <div className="flex items-center gap-3">
                            <div className={cn("rounded-lg p-2.5", metric.color)}>
                                <metric.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{metric.label}</p>
                                <p className="text-xl font-bold text-slate-900">{metric.value}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>User Growth</Card.Title>
                            <Card.Description>Monthly active users over time</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="flex flex-col items-center justify-center py-12">
                            <TrendingUp className="h-16 w-16 text-slate-200" />
                            <p className="mt-4 text-sm text-slate-500">Analytics dashboard will display charts here</p>
                            <p className="mt-1 text-xs text-slate-400">Integrate with a charting library for visualizations</p>
                        </div>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Header>
                        <div>
                            <Card.Title>Revenue Analytics</Card.Title>
                            <Card.Description>Monthly and yearly revenue trends</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="flex flex-col items-center justify-center py-12">
                            <DollarSign className="h-16 w-16 text-slate-200" />
                            <p className="mt-4 text-sm text-slate-500">Revenue analytics will display charts here</p>
                            <p className="mt-1 text-xs text-slate-400">Integrate with a charting library for visualizations</p>
                        </div>
                    </Card.Content>
                </Card>

                <Card className="lg:col-span-2">
                    <Card.Header>
                        <div>
                            <Card.Title>Platform Overview</Card.Title>
                            <Card.Description>Key platform metrics at a glance</Card.Description>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="grid gap-6 sm:grid-cols-3">
                            <div className="rounded-lg border border-slate-200 p-4 text-center">
                                <p className="text-3xl font-bold text-slate-900">256</p>
                                <p className="mt-1 text-sm text-slate-500">Total Institutes</p>
                            </div>
                            <div className="rounded-lg border border-slate-200 p-4 text-center">
                                <p className="text-3xl font-bold text-slate-900">48.5K</p>
                                <p className="mt-1 text-sm text-slate-500">Total Students</p>
                            </div>
                            <div className="rounded-lg border border-slate-200 p-4 text-center">
                                <p className="text-3xl font-bold text-slate-900">$125K</p>
                                <p className="mt-1 text-sm text-slate-500">Monthly Revenue</p>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}

export { Analytics };