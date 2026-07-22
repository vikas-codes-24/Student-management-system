import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function AddClass() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Add Class"
                description="Create a new class"
                breadcrumbItems={["classes", "add"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/institute/classes")}>
                        Back
                    </Button>
                }
            />
            <Card>
                <form className="space-y-5 max-w-2xl">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Class Name" name="className" placeholder="e.g. Class 10" required />
                        <TextField label="Section" name="section" placeholder="e.g. A, B, C" required />
                    </div>
                    <SelectField
                        label="Class Teacher"
                        name="teacher"
                        options={[
                            { value: "1", label: "John Doe" },
                            { value: "2", label: "Jane Smith" },
                        ]}
                        required
                    />
                    <div className="flex items-center gap-3 pt-2">
                        <Button type="submit" icon={Save}>
                            Create Class
                        </Button>
                        <Button variant="secondary" onClick={() => navigate("/institute/classes")}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export { AddClass };