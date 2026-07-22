import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Trash2, Building2, Mail, Phone, Users, Calendar } from "lucide-react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { StatusBadge } from "../../../components/common/StatusBadge";

function InstituteDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <PageHeader
                title="Institute Details"
                description={`Viewing institute #${id}`}
                breadcrumbItems={["institutes", "details"]}
                actions={
                    <>
                        <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate("/super-admin/institutes")}>
                            Back
                        </Button>
                        <Button variant="secondary" icon={Edit} onClick={() => navigate(`/super-admin/institutes/${id}/edit`)}>
                            Edit
                        </Button>
                        <Button variant="danger" icon={Trash2}>
                            Delete
                        </Button>
                    </>
                }
            />

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <Building2 className="h-8 w-8" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">Institute Name</h2>
                                <p className="text-sm text-slate-500">ID: {id}</p>
                                <div className="mt-1">
                                    <StatusBadge status="active" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <Card.Title>Institute Details</Card.Title>
                        <Card.Content className="mt-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-slate-400" />
                                    <div>
                                        <p className="text-xs text-slate-500">Email</p>
                                        <p className="text-sm font-medium text-slate-900">institute@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                    <div>
                                        <p className="text-xs text-slate-500">Phone</p>
                                        <p className="text-sm font-medium text-slate-900">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="h-4 w-4 text-slate-400" />
                                    <div>
                                        <p className="text-xs text-slate-500">Total Students</p>
                                        <p className="text-sm font-medium text-slate-900">1,234</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-slate-400" />
                                    <div>
                                        <p className="text-xs text-slate-500">Joined</p>
                                        <p className="text-sm font-medium text-slate-900">Jan 15, 2025</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <Card.Title>Subscription</Card.Title>
                        <Card.Content className="mt-4">
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Plan</span>
                                    <span className="text-sm font-medium text-slate-900">Enterprise</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Status</span>
                                    <StatusBadge status="active" />
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Renewal</span>
                                    <span className="text-sm font-medium text-slate-900">Dec 31, 2026</span>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export { InstituteDetails };