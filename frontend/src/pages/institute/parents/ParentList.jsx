import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "student", label: "Student", sortable: true },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function ParentList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Parents"
                description="Manage parent/guardian records"
                actions={
                    <Button icon={Plus}>
                        Add Parent
                    </Button>
                }
            />
            <div className="mb-4">
                <SearchBox placeholder="Search parents..." className="max-w-sm" />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export { ParentList };