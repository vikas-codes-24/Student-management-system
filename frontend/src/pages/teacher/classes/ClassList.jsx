import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../../components/layout/PageHeader";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "name", label: "Class Name", sortable: true },
    { key: "section", label: "Section", sortable: true },
    { key: "subject", label: "Subject", sortable: true },
    { key: "students", label: "Students" },
    { key: "schedule", label: "Schedule" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function ClassList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="My Classes"
                description="View your assigned classes"
            />
            <div className="mb-4">
                <SearchBox placeholder="Search classes..." className="max-w-sm" />
            </div>
            <DataTable
                columns={columns}
                data={data}
                onRowClick={(row) => navigate(`/teacher/classes/${row.id}`)}
            />
        </div>
    );
}

export { ClassList };