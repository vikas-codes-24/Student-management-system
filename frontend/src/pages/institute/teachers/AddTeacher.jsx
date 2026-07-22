import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function AddTeacher() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Add Teacher"
                description="Add a new teacher to the institution"
                breadcrumbItems={["teachers", "add"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/institute/teachers")}>
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
                    <SelectField
                        label="Subject"
                        name="subject"
                        options={[
                            { value: "mathematics", label: "Mathematics" },
                            { value: "physics", label: "Physics" },
                            { value: "chemistry", label: "Chemistry" },
                            { value: "english", label: "English" },
                        ]}
                        required
                    />
                    <div className="flex items-center gap-3 pt-2">
                        <Button type="submit" icon={Save}>
                            Save Teacher
                        </Button>
                        <Button variant="secondary" onClick={() => navigate("/institute/teachers")}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export { AddTeacher };