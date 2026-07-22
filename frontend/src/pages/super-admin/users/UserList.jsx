import { Search, Filter } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";
import { Card } from "../../../components/common/Card";

const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "institute", label: "Institute", sortable: true },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
    { key: "lastActive", label: "Last Active", sortable: true },
];

const data = [];

function UserList() {
    return (
        <div>
            <PageHeader
                title="Platform Users"
                description="Manage all platform users"
                actions={
                    <Button icon={Filter}>Filters</Button>
                }
            />
            <Card>
                <div className="flex items-center gap-3 mb-4">
                    <SearchBox placeholder="Search users..." className="max-w-sm flex-1" />
                    <Button variant="secondary" icon={Filter}>Filters</Button>
                </div>
                <DataTable columns={columns} data={data} />
                <div className="mt-4 text-center">
                    <p className="text-sm text-slate-500">No users found</p>
                </div>
            </Card>
        </div>
    );
}

export { UserList };