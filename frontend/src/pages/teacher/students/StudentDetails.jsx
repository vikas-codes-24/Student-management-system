import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function StudentDetails() {
    return (
        <div>
            <PageHeader
                title="Student Details"
                description="View student profile and academic information"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Student Profile</Card.Title>
                    <Card.Description>Detailed student information will be shown here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Student detail content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { StudentDetails };
