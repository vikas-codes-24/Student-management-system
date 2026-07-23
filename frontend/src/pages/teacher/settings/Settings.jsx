import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function Settings() {
    return (
        <div>
            <PageHeader
                title="Settings"
                description="Manage your teacher account preferences"
            />

            <Card>
                <Card.Header>
                    <Card.Title>Account Settings</Card.Title>
                    <Card.Description>Teacher-specific settings will appear here.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">Settings content is being prepared.</p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { Settings };
