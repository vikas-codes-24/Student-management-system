import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function Attendance() {
    return (
        <div>
            <PageHeader
                title="Attendance"
                description="Review attendance for your classes"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Class Attendance</Card.Title>
                    <Card.Description>Attendance records will be displayed here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Attendance overview content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { Attendance };
