import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

function Settings() {
    return (
        <div>
            <PageHeader
                title="Settings"
                description="Manage institution settings"
            />
            <Card>
                <p className="text-slate-500">Settings content will be displayed here.</p>
            </Card>
        </div>
    );
}

export { Settings };