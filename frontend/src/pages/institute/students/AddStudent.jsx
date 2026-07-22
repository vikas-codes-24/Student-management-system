import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function AddStudent() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Add Student"
                description="Enroll a new student"
                breadcrumbItems={["students", "add"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/institute/students")}>
                        Back
                    </Button>
                }
            />
            <Card>
                <form className="space-y-5 max-w-2xl">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="First Name" name="firstName" placeholder="Enter first name" required />
                        <TextField label="Last Name" name="lastName" placeholder="Enter last name" required />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Email" type="email" name="email" placeholder="Enter email" required />
                        <TextField label="Phone" type="tel" name="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <SelectField
                            label="Class"
                            name="class"
                            options={[
                                { value: "10", label: "Class 10" },
                                { value: "11", label: "Class 11" },
                                { value: "12", label: "Class 12" },
                            ]}
                            required
                        />
                        <TextField label="Roll Number" name="rollNumber" placeholder="Enter roll number" required />
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <Button type="submit" icon={Save}>
                            Save Student
                        </Button>
                        <Button variant="secondary" onClick={() => navigate("/institute/students")}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export { AddStudent };