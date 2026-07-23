import { useParams } from "react-router-dom";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { Users, Clock, BookOpen, MapPin } from "lucide-react";

// Placeholder data - replace with real API call using the class id
const classData = {
    name: "Class 10 - Section A",
    subject: "Mathematics",
    schedule: "Mon, Wed, Fri - 9:00 AM to 10:00 AM",
    room: "Room 204",
    studentCount: 32,
};

function ClassDetails() {
    const { id } = useParams();

    return (
        <div>
            <PageHeader
                title={classData.name}
                description={`Class details${id ? ` (ID: ${id})` : ""}`}
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary-600" />
                        <div>
                            <p className="text-xs text-slate-500">Subject</p>
                            <p className="font-semibold text-slate-900">{classData.subject}</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <div>
                            <p className="text-xs text-slate-500">Schedule</p>
                            <p className="font-semibold text-slate-900">{classData.schedule}</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <div>
                            <p className="text-xs text-slate-500">Room</p>
                            <p className="font-semibold text-slate-900">{classData.room}</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary-600" />
                        <div>
                            <p className="text-xs text-slate-500">Students</p>
                            <p className="font-semibold text-slate-900">{classData.studentCount}</p>
                        </div>
                    </div>
                </Card>
            </div>

            <Card>
                <Card.Header>
                    <Card.Title>About this class</Card.Title>
                    <Card.Description>Read-only overview. Contact the institute admin to make changes.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p className="text-slate-500">
                        Detailed class information, syllabus, and student roster will be displayed here.
                    </p>
                </Card.Content>
            </Card>
        </div>
    );
}

export { ClassDetails };