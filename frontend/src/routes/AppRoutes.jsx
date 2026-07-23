import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { InstituteLayout } from "../layouts/InstituteLayout";
import { SuperAdminLayout } from "../layouts/SuperAdminLayout";
import { TeacherLayout } from "../layouts/TeacherLayout";
import { AuthLayout } from "../layouts/AuthLayout";

// Auth pages
import { Login } from "../pages/auth/Login";
import { ForgotPassword } from "../pages/auth/ForgotPassword";

// ============================================================
// Institute Admin Pages
// ============================================================

// Institute Dashboard pages
import { Dashboard as InstituteDashboard } from "../pages/institute/dashboard/Dashboard";

// Institute Student pages
import { StudentList } from "../pages/institute/students/StudentList";
import { StudentDetails } from "../pages/institute/students/StudentDetails";
import { AddStudent } from "../pages/institute/students/AddStudent";
import { EditStudent } from "../pages/institute/students/EditStudent";

// Institute Teacher pages
import { TeacherList } from "../pages/institute/teachers/TeacherList";
import { TeacherDetails } from "../pages/institute/teachers/TeacherDetails";
import { AddTeacher } from "../pages/institute/teachers/AddTeacher";

// Institute Class pages
import { ClassList } from "../pages/institute/classes/ClassList";
import { AddClass } from "../pages/institute/classes/AddClass";

// Institute Attendance pages
import { Attendance } from "../pages/institute/attendance/Attendance";
import { MarkAttendance } from "../pages/institute/attendance/MarkAttendance";

// Institute Parent pages
import { ParentList } from "../pages/institute/parents/ParentList";

// Institute Fee pages
import { FeeList } from "../pages/institute/fees/FeeList";

// Institute Report pages
import { Reports } from "../pages/institute/reports/Reports";

// Institute Settings page
import { Settings as InstituteSettings } from "../pages/institute/settings/Settings";

// ============================================================
// Super Admin Pages
// ============================================================

import { Dashboard as SuperAdminDashboard } from "../pages/super-admin/dashboard/Dashboard";
import { InstituteList } from "../pages/super-admin/institutes/InstituteList";
import { InstituteDetails } from "../pages/super-admin/institutes/InstituteDetails";
import { AddInstitute } from "../pages/super-admin/institutes/AddInstitute";
import { EditInstitute } from "../pages/super-admin/institutes/EditInstitute";
import { PlanList } from "../pages/super-admin/plans/PlanList";
import { AddPlan } from "../pages/super-admin/plans/AddPlan";
import { EditPlan } from "../pages/super-admin/plans/EditPlan";
import { SubscriptionList } from "../pages/super-admin/subscriptions/SubscriptionList";
import { UserList } from "../pages/super-admin/users/UserList";
import { Analytics } from "../pages/super-admin/analytics/Analytics";
import { Support } from "../pages/super-admin/support/Support";
import { Settings as SuperAdminSettings } from "../pages/super-admin/settings/Settings";

// Teacher pages
import { Dashboard as TeacherDashboard } from "../pages/teacher/dashboard/Dashboard";
import { ClassList as TeacherClassList } from "../pages/teacher/classes/ClassList";
import { ClassDetails as TeacherClassDetails } from "../pages/teacher/classes/ClassDetails";
import { StudentList as TeacherStudentList } from "../pages/teacher/students/StudentList";
import { StudentDetails as TeacherStudentDetails } from "../pages/teacher/students/StudentDetails";
import { Attendance as TeacherAttendance } from "../pages/teacher/attendance/Attendance";
import { MarkAttendance as TeacherMarkAttendance } from "../pages/teacher/attendance/MarkAttendance";
import { Timetable as TeacherTimetable } from "../pages/teacher/timetable/Timetable";
import { Settings as TeacherSettings } from "../pages/teacher/settings/Settings";

function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/auth" element={<PublicRoute />}>
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
            </Route>

            {/* ============================================================ */}
            {/* Institute Admin routes */}
            {/* ============================================================ */}
            <Route path="/" element={<ProtectedRoute />}>
                <Route element={<InstituteLayout />}>
                    <Route index element={<Navigate to="/institute/dashboard" replace />} />
                    <Route path="institute/dashboard" element={<InstituteDashboard />} />

                    {/* Students */}
                    <Route path="institute/students" element={<StudentList />} />
                    <Route path="institute/students/add" element={<AddStudent />} />
                    <Route path="institute/students/:id" element={<StudentDetails />} />
                    <Route path="institute/students/:id/edit" element={<EditStudent />} />

                    {/* Teachers */}
                    <Route path="institute/teachers" element={<TeacherList />} />
                    <Route path="institute/teachers/add" element={<AddTeacher />} />
                    <Route path="institute/teachers/:id" element={<TeacherDetails />} />

                    {/* Classes */}
                    <Route path="institute/classes" element={<ClassList />} />
                    <Route path="institute/classes/add" element={<AddClass />} />

                    {/* Attendance */}
                    <Route path="institute/attendance" element={<Attendance />} />
                    <Route path="institute/attendance/mark" element={<MarkAttendance />} />

                    {/* Parents */}
                    <Route path="institute/parents" element={<ParentList />} />

                    {/* Fees */}
                    <Route path="institute/fees" element={<FeeList />} />

                    {/* Reports */}
                    <Route path="institute/reports" element={<Reports />} />

                    {/* Settings */}
                    <Route path="institute/settings" element={<InstituteSettings />} />
                </Route>
            </Route>

            {/* ============================================================ */}
            {/* Teacher routes */}
            {/* ============================================================ */}
            <Route path="/teacher" element={<ProtectedRoute />}>
                <Route element={<TeacherLayout />}>
                    <Route index element={<Navigate to="/teacher/dashboard" replace />} />
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="classes" element={<TeacherClassList />} />
                    <Route path="classes/:id" element={<TeacherClassDetails />} />
                    <Route path="students" element={<TeacherStudentList />} />
                    <Route path="students/:id" element={<TeacherStudentDetails />} />
                    <Route path="attendance" element={<TeacherAttendance />} />
                    <Route path="attendance/mark" element={<TeacherMarkAttendance />} />
                    <Route path="timetable" element={<TeacherTimetable />} />
                    <Route path="settings" element={<TeacherSettings />} />
                </Route>
            </Route>

            {/* ============================================================ */}
            {/* Super Admin routes */}
            {/* ============================================================ */}
            <Route path="/super-admin" element={<ProtectedRoute />}>
                <Route element={<SuperAdminLayout />}>
                    <Route index element={<Navigate to="/super-admin/dashboard" replace />} />
                    <Route path="dashboard" element={<SuperAdminDashboard />} />

                    {/* Institutes */}
                    <Route path="institutes" element={<InstituteList />} />
                    <Route path="institutes/add" element={<AddInstitute />} />
                    <Route path="institutes/:id" element={<InstituteDetails />} />
                    <Route path="institutes/:id/edit" element={<EditInstitute />} />

                    {/* Plans */}
                    <Route path="plans" element={<PlanList />} />
                    <Route path="plans/add" element={<AddPlan />} />
                    <Route path="plans/:id/edit" element={<EditPlan />} />

                    {/* Subscriptions */}
                    <Route path="subscriptions" element={<SubscriptionList />} />

                    {/* Users */}
                    <Route path="users" element={<UserList />} />

                    {/* Analytics */}
                    <Route path="analytics" element={<Analytics />} />

                    {/* Support */}
                    <Route path="support" element={<Support />} />

                    {/* Settings */}
                    <Route path="settings" element={<SuperAdminSettings />} />
                </Route>
            </Route>

            {/* Fallback */}
            <Route
                path="*"
                element={
                    <Navigate
                        to={
                            user?.role === "SUPER_ADMIN"
                                ? "/super-admin/dashboard"
                                : user?.role === "TEACHER"
                                    ? "/teacher/dashboard"
                                    : "/institute/dashboard"
                        }
                        replace
                    />
                }
            />
        </Routes>
    );
}

export { AppRoutes };