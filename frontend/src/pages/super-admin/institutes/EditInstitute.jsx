import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function EditInstitute() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Edit Institute"
                description={`Editing institute #${id}`}
                breadcrumbItems={["institutes", "edit"]}
                actions={
                    <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate(`/super-admin/institutes/${id}`)}>
                        Back
                    </Button>
                }
            />
            <Card>
                <form className="space-y-5 max-w-2xl">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Institute Name" name="name" placeholder="Enter institute name" required />
                        <TextField label="Email" type="email" name="email" placeholder="Enter email" required />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <TextField label="Phone" type="tel" name="phone" placeholder="Enter phone number" />
                        <TextField label="Address" name="address" placeholder="Enter address" />
                    </div>
                    <SelectField
                        label="Status"
                        name="status"
                        options={[
                            { value: "active", label: "Active" },
                            { value: "inactive", label: "Inactive" },
                            { value: "suspended", label: "Suspended" },
                        ]}
                        required
                    />
                    <div className="flex items-center gap-3 pt-2">
                        <Button type="submit" icon={Save}>
                            Update Institute
                        </Button>
                        <Button variant="secondary" onClick={() => navigate(`/super-admin/institutes/${id}`)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export { EditInstitute };