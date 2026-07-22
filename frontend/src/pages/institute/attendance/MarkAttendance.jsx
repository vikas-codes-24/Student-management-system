import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";

function MarkAttendance() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Mark Attendance"
                description="Record today's attendance"
                breadcrumbItems={["attendance", "mark"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/institute/attendance")}>
                        Back
                    </Button>
                }
            />
            <Card>
                <p className="text-slate-500">Attendance marking form will be displayed here.</p>
            </Card>
        </div>
    );
}

export { MarkAttendance };