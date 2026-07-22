import { useNavigate } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "class", label: "Class", sortable: true },
    { key: "rollNumber", label: "Roll No", sortable: true },
    { key: "email", label: "Email" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function StudentList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Students"
                description="Manage all student records"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/institute/students/add")}>
                        Add Student
                    </Button>
                }
            />
            <div className="mb-4">
                <SearchBox placeholder="Search students..." className="max-w-sm" />
            </div>
            <DataTable
                columns={columns}
                data={data}
                onRowClick={(row) => navigate(`/institute/students/${row.id}`)}
                pagination={{
                    currentPage: 1,
                    totalPages: 1,
                    totalItems: 0,
                    pageSize: 10,
                    onPageChange: () => { },
                }}
            />
        </div>
    );
}

export { StudentList };