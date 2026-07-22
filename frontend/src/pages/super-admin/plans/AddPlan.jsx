import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function AddPlan() {
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Add Plan"
                description="Create a new subscription plan"
                breadcrumbItems={["plans", "add"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/super-admin/plans")}>
                        Back
                    </Button>
                }
            />
            <Card>
                <form className="space-y-5 max-w-2xl">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Plan Name" name="name" placeholder="e.g. Enterprise" required />
                        <TextField label="Price" type="number" name="price" placeholder="e.g. 199" required />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Max Students" type="number" name="maxStudents" placeholder="e.g. 2000" required />
                        <TextField label="Max Teachers" type="number" name="maxTeachers" placeholder="e.g. 200" required />
                    </div>
                    <TextField label="Storage Limit" name="storage" placeholder="e.g. 100GB" required />
                    <SelectField
                        label="Billing Period"
                        name="billingPeriod"
                        options={[
                            { value: "monthly", label: "Monthly" },
                            { value: "yearly", label: "Yearly" },
                            { value: "quarterly", label: "Quarterly" },
                        ]}
                        required
                    />
                    <div className="flex items-center gap-3 pt-2">
                        <Button type="submit" icon={Save}>
                            Create Plan
                        </Button>
                        <Button variant="secondary" onClick={() => navigate("/super-admin/plans")}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export { AddPlan };