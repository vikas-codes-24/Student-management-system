import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function Timetable() {
    return (
        <div>
            <PageHeader
                title="Timetable"
                description="View your weekly teaching schedule"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Teaching Schedule</Card.Title>
                    <Card.Description>Your timetable will be displayed here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Timetable content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { Timetable };
