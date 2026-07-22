import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "date", label: "Date", sortable: true },
    { key: "class", label: "Class", sortable: true },
    { key: "present", label: "Present" },
    { key: "absent", label: "Absent" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function Attendance() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Attendance"
                description="Track student attendance"
                actions={
                    <Button icon={Plus} onClick={() => navigate("/institute/attendance/mark")}>
                        Mark Attendance
                    </Button>
                }
            />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export { Attendance };