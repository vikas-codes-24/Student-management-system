import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { Avatar } from "../../../components/common/Avatar";
import { StatusBadge } from "../../../components/common/StatusBadge";

function StudentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Student Details"
                description={`Viewing student #${id}`}
                breadcrumbItems={["students", "details"]}
                actions={
                    <>
                        <Button
                            variant="secondary"
                            icon={ArrowLeft}
                            onClick={() => navigate("/institute/students")}
                        >
                            Back
                        </Button>
                        <Button
                            variant="secondary"
                            icon={Edit}
                            onClick={() => navigate(`/institute/students/${id}/edit`)}
                        >
                            Edit
                        </Button>
                        <Button variant="danger" icon={Trash2}>
                            Delete
                        </Button>
                    </>
                }
            />
            <Card>
                <div className="flex items-center gap-4">
                    <Avatar name="Student Name" size="xl" />
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Student Name</h2>
                        <p className="text-sm text-slate-500">Class 10 - Roll No: 101</p>
                        <div className="mt-1">
                            <StatusBadge status="active" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export { StudentDetails };