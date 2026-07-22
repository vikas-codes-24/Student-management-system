import { useNavigate } from "react-router-dom";
import { Plus, Search, Filter } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";
import { Card } from "../../../components/common/Card";

const columns = [
    { key: "name", label: "Institute Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "students", label: "Students", sortable: true },
    { key: "plan", label: "Plan", sortable: true },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
    { key: "joined", label: "Joined", sortable: true },
];

const data = [];

function InstituteList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Institutes"
                description="Manage all registered institutes"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/super-admin/institutes/add")}>
                        Add Institute
                    </Button>
                }
            />
            <Card>
                <div className="flex items-center gap-3 mb-4">
                    <SearchBox placeholder="Search institutes..." className="max-w-sm flex-1" />
                    <Button variant="secondary" icon={Filter}>Filters</Button>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    onRowClick={(row) => navigate(`/super-admin/institutes/${row.id}`)}
                />
                <div className="mt-4 text-center">
                    <p className="text-sm text-slate-500">No institutes found</p>
                </div>
            </Card>
        </div>
    );
}

export { InstituteList };