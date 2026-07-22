import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "subject", label: "Subject", sortable: true },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function TeacherList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Teachers"
                description="Manage all teacher records"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/institute/teachers/add")}>
                        Add Teacher
                    </Button>
                }
            />
            <div className="mb-4">
                <SearchBox placeholder="Search teachers..." className="max-w-sm" />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export { TeacherList };