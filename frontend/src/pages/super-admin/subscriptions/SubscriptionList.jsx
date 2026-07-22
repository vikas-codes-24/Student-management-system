import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";
import { Card } from "../../../components/common/Card";

const columns = [
    { key: "institute", label: "Institute", sortable: true },
    { key: "plan", label: "Plan", sortable: true },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
    { key: "startDate", label: "Start Date", sortable: true },
    { key: "endDate", label: "End Date", sortable: true },
    { key: "amount", label: "Amount", sortable: true },
];

const data = [];

function SubscriptionList() {
    return (
        <div>
            <PageHeader
                title="Subscriptions"
                description="Manage institute subscriptions"
            />
            <Card>
                <div className="flex items-center gap-3 mb-4">
                    <SearchBox placeholder="Search subscriptions..." className="max-w-sm flex-1" />
                    <Button variant="secondary" icon={Filter}>Filters</Button>
                </div>
                <DataTable columns={columns} data={data} />
                <div className="mt-4 text-center">
                    <p className="text-sm text-slate-500">No subscriptions found</p>
                </div>
            </Card>
        </div>
    );
}

export { SubscriptionList };