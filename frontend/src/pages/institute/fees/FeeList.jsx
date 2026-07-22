import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { DataTable } from "../../../components/tables/DataTable";
import { StatusBadge } from "../../../components/common/StatusBadge";

const columns = [
    { key: "student", label: "Student", sortable: true },
    { key: "class", label: "Class", sortable: true },
    { key: "amount", label: "Amount", sortable: true },
    { key: "dueDate", label: "Due Date", sortable: true },
    { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
];

const data = [];

function FeeList() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Fees"
                description="Manage fee records and payments"
                actions={
                    <Button icon={Plus}>
                        Add Fee Record
                    </Button>
                }
            />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export { FeeList };