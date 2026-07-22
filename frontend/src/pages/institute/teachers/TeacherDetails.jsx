import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { Avatar } from "../../../components/common/Avatar";
import { StatusBadge } from "../../../components/common/StatusBadge";

function TeacherDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Teacher Details"
                description={`Viewing teacher #${id}`}
                breadcrumbItems={["teachers", "details"]}
                actions={
                    <>
                        <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/institute/teachers")}>
                            Back
                        </Button>
                        <Button variant="secondary" icon={Edit}>
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
                    <Avatar name="Teacher Name" size="xl" />
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Teacher Name</h2>
                        <p className="text-sm text-slate-500">Mathematics</p>
                        <div className="mt-1">
                            <StatusBadge status="active" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export { TeacherDetails };