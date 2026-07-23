import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function MarkAttendance() {
    return (
        <div>
            <PageHeader
                title="Mark Attendance"
                description="Record attendance for today's classes"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Attendance Entry</Card.Title>
                    <Card.Description>Attendance marking tools will be added here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Attendance marking content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { MarkAttendance };
