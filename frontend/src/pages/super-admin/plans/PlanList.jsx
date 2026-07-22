import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { StatusBadge } from "../../../components/common/StatusBadge";

const plans = [
    { name: "Basic", price: "$29", period: "/month", students: 100, teachers: 10, storage: "5GB", status: "active" },
    { name: "Standard", price: "$79", period: "/month", students: 500, teachers: 50, storage: "25GB", status: "active" },
    { name: "Enterprise", price: "$199", period: "/month", students: 2000, teachers: 200, storage: "100GB", status: "active" },
    { name: "Enterprise Plus", price: "$399", period: "/month", students: 5000, teachers: 500, storage: "500GB", status: "active" },
];

function PlanList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Subscription Plans"
                description="Manage pricing plans and features"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/super-admin/plans/add")}>
                        Add Plan
                    </Button>
                }
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan) => (
                    <Card key={plan.name} hover className="relative flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                            <StatusBadge status={plan.status} />
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                            <span className="text-sm text-slate-500">{plan.period}</span>
                        </div>
                        <div className="space-y-2 flex-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Students</span>
                                <span className="font-medium text-slate-900">Up to {plan.students}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Teachers</span>
                                <span className="font-medium text-slate-900">Up to {plan.teachers}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Storage</span>
                                <span className="font-medium text-slate-900">{plan.storage}</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <Button
                                variant="secondary"
                                className="w-full"
                                onClick={() => navigate("/super-admin/plans/add")}
                            >
                                Edit Plan
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export { PlanList };