import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";

const reportCards = [
    { title: "Student Performance", description: "View academic performance reports" },
    { title: "Attendance Summary", description: "View attendance statistics" },
    { title: "Fee Collection", description: "View fee collection reports" },
    { title: "Teacher Analytics", description: "View teacher performance metrics" },
];

function Reports() {
    return (
        <div>
            <PageHeader
                title="Reports"
                description="Generate and view reports"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {reportCards.map((report) => (
                    <Card key={report.title}>
                        <h3 className="text-lg font-semibold text-slate-900">{report.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{report.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export { Reports };