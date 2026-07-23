import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function StudentList() {
    return (
        <div>
            <PageHeader
                title="My Students"
                description="Manage students in your assigned classes"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Students</Card.Title>
                    <Card.Description>Student lists for your classes will appear here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Student management content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { StudentList };
