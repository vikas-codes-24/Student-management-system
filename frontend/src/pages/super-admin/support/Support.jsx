import { HeadphonesIcon, MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { Button } from "../../../components/common/Button";
import { cn } from "../../../utils";

const tickets = [
    { id: 1, subject: "Login issue", institute: "Springfield Elementary", status: "open", priority: "high", date: "2 hours ago" },
    { id: 2, subject: "Fee module not working", institute: "Riverside High School", status: "in-progress", priority: "medium", date: "5 hours ago" },
    { id: 3, subject: "Student import error", institute: "Maple Grove Academy", status: "open", priority: "low", date: "1 day ago" },
    { id: 4, subject: "Data export request", institute: "Oakwood International", status: "resolved", priority: "low", date: "3 days ago" },
];

const statusColors = {
    "open": "bg-amber-100 text-amber-800",
    "in-progress": "bg-blue-100 text-blue-800",
    "resolved": "bg-emerald-100 text-emerald-800",
};

const priorityColors = {
    "high": "text-red-600",
    "medium": "text-amber-600",
    "low": "text-slate-600",
};

function Support() {
    return (
        <div>
            <PageHeader
                title="Support"
                description="Manage support tickets and inquiries"
            />

            <div className="grid gap-6 md:grid-cols-3 mb-6">
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Open Tickets</p>
                            <p className="text-xl font-bold text-slate-900">12</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-amber-50 p-2.5 text-amber-600">
                            <HeadphonesIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">In Progress</p>
                            <p className="text-xl font-bold text-slate-900">5</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-600">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Resolved Today</p>
                            <p className="text-xl font-bold text-slate-900">8</p>
                        </div>
                    </div>
                </Card>
            </div>

            <Card>
                <Card.Header>
                    <div>
                        <Card.Title>Recent Support Tickets</Card.Title>
                        <Card.Description>Latest support requests from institutes</Card.Description>
                    </div>
                    <Button variant="secondary" icon={MessageSquare}>View All</Button>
                </Card.Header>
                <Card.Content>
                    <div className="divide-y divide-slate-100">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                                        <span className="text-xs font-medium text-slate-600">#{ticket.id}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900">{ticket.subject}</p>
                                        <p className="text-xs text-slate-500">{ticket.institute}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={cn(
                                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                        statusColors[ticket.status]
                                    )}>
                                        {ticket.status}
                                    </span>
                                    <span className={cn("text-xs font-medium", priorityColors[ticket.priority])}>
                                        {ticket.priority}
                                    </span>
                                    <span className="text-xs text-slate-400">{ticket.date}</span>
                                    <ArrowRight className="h-4 w-4 text-slate-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}

export { Support };