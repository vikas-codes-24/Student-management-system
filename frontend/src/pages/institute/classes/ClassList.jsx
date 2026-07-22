import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { SearchBox } from "../../../components/common/SearchBox";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "name", label: "Class Name", sortable: true },
    { key: "section", label: "Section", sortable: true },
    { key: "students", label: "Students" },
    { key: "teacher", label: "Class Teacher" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function ClassList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Classes"
                description="Manage all classes"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/institute/classes/add")}>
                        Add Class
                    </Button>
                }
            />
            <div className="mb-4">
                <SearchBox placeholder="Search classes..." className="max-w-sm" />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export { ClassList };