import { Save } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/common/Card";
import { Button } from "../../../components/common/Button";
import { TextField } from "../../../components/forms/TextField";
import { SelectField } from "../../../components/forms/SelectField";

function Settings() {
    return (
        <div>
            <PageHeader
                title="Platform Settings"
                description="Manage global platform settings"
            />

            <div className="space-y-6 max-w-3xl">
                <Card>
                    <Card.Title>General Settings</Card.Title>
                    <Card.Description>Configure basic platform settings</Card.Description>
                    <Card.Content className="mt-4 space-y-5">
                        <TextField label="Platform Name" name="platformName" placeholder="Student Management Portal" defaultValue="Student Management Portal" />
                        <TextField label="Support Email" type="email" name="supportEmail" placeholder="support@example.com" defaultValue="support@example.com" />
                        <div className="grid gap-5 sm:grid-cols-2">
                            <TextField label="Default Currency" name="currency" placeholder="USD" defaultValue="USD" />
                            <TextField label="Timezone" name="timezone" placeholder="UTC" defaultValue="UTC" />
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        <Button icon={Save}>Save Changes</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Title>Notification Settings</Card.Title>
                    <Card.Description>Configure email and notification preferences</Card.Description>
                    <Card.Content className="mt-4 space-y-5">
                        <SelectField
                            label="Default Notification Language"
                            name="language"
                            options={[
                                { value: "en", label: "English" },
                                { value: "es", label: "Spanish" },
                                { value: "fr", label: "French" },
                            ]}
                        />
                        <SelectField
                            label="Email Provider"
                            name="emailProvider"
                            options={[
                                { value: "sendgrid", label: "SendGrid" },
                                { value: "ses", label: "Amazon SES" },
                                { value: "mailgun", label: "Mailgun" },
                            ]}
                        />
                    </Card.Content>
                    <Card.Footer>
                        <Button icon={Save}>Save Changes</Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Title>Security Settings</Card.Title>
                    <Card.Description>Configure platform security preferences</Card.Description>
                    <Card.Content className="mt-4 space-y-5">
                        <SelectField
                            label="Two-Factor Authentication"
                            name="2fa"
                            options={[
                                { value: "required", label: "Required for all users" },
                                { value: "optional", label: "Optional" },
                                { value: "disabled", label: "Disabled" },
                            ]}
                        />
                        <SelectField
                            label="Session Timeout"
                            name="sessionTimeout"
                            options={[
                                { value: "30", label: "30 minutes" },
                                { value: "60", label: "1 hour" },
                                { value: "120", label: "2 hours" },
                                { value: "240", label: "4 hours" },
                            ]}
                        />
                    </Card.Content>
                    <Card.Footer>
                        <Button icon={Save}>Save Changes</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export { Settings };