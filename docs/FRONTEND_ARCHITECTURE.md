# Frontend Architecture — Student Management Portal (SMP)

## Project Overview

Student Management Portal (SMP) is a production-grade multi-tenant SaaS built with React 19. It allows educational institutions to manage students, teachers, classes, attendance, fees, parents, and reports. The platform also includes a Super Admin portal for the SaaS owner to manage institutes, subscription plans, platform users, analytics, support tickets, and global settings.

### User Roles

- **Super Admin** — SaaS owner. Manages the entire platform (institutes, plans, subscriptions, users, analytics, support, settings).
- **Institute Admin** — Administrator of a specific educational institute. Manages students, teachers, classes, attendance, fees, parents, and reports.
- **Teacher** — _(Not implemented yet)_ Will manage classes and attendance.
- **Student** — _(Not implemented yet)_ Will view grades and attendance.
- **Parent** — _(Not implemented yet)_ Will view student progress.

### Currently Existing Modules

| Module                                  | Status   |
| --------------------------------------- | -------- |
| Authentication (Login, Forgot Password) | Complete |
| Institute Admin Portal                  | Complete |
| Super Admin Portal                      | Complete |
| Teacher Portal                          | Pending  |
| Student Portal                          | Pending  |
| Parent Portal                           | Pending  |

## Tech Stack

| Technology                | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| **React 19**              | UI library — component-based architecture with server components             |
| **Vite 8**                | Build tool — fast HMR, ESBuild transform, Rolldown bundling                  |
| **Tailwind CSS v4**       | Utility-first CSS framework — no custom CSS files, inline styling            |
| **React Router DOM v7**   | Client-side routing with nested routes, protected routes, public routes      |
| **Framer Motion 12**      | Declarative animations (sidebar, dropdowns, page transitions, hover effects) |
| **Lucide React**          | Icon library — tree-shakable, consistent stroke-based icons                  |
| **@tanstack/react-query** | Server state management (caching, refetching, mutations)                     |
| **Axios**                 | HTTP client for API calls                                                    |
| **React Hook Form**       | Form state management with validation                                        |
| **Zod**                   | Schema validation for forms                                                  |
| **date-fns**              | Date formatting and manipulation                                             |
| **clsx + tailwind-merge** | Conditional class name merging (`cn` utility)                                |
| **sonner**                | Toast notifications                                                          |
| **recharts**              | _(Installed but not yet used)_ Charting library                              |
| **react-helmet-async**    | SEO head management                                                          |

### Why React?

The project needs a component-based architecture with reusable UI patterns across multiple portals. React's ecosystem provides the best support for this use case with libraries like React Router, React Query, and React Hook Form.

### Why Vite?

Vite provides instantaneous HMR (Hot Module Replacement), fast builds via Rolldown, and zero-config support for React + TypeScript + Tailwind CSS.

### Why Tailwind CSS v4?

Tailwind v4 removes the need for configuration files (`tailwind.config.js`). It uses CSS-first configuration via `@import "tailwindcss"` and custom theme variables defined in `index.css`. This keeps styling consistent and reduces CSS bloat.

## Overall Frontend Architecture

### Module Separation

The frontend is organized into feature-based modules under `frontend/src/pages/`:

```
frontend/src/pages/
├── auth/            # Authentication pages (Login, ForgotPassword)
├── institute/       # Institute Admin portal
│   ├── dashboard/
│   ├── students/
│   ├── teachers/
│   ├── classes/
│   ├── attendance/
│   ├── parents/
│   ├── fees/
│   ├── reports/
│   └── settings/
└── super-admin/     # Super Admin portal
    ├── dashboard/
    ├── institutes/
    ├── plans/
    ├── subscriptions/
    ├── users/
    ├── analytics/
    ├── support/
    └── settings/
```

### Layouts

Each portal has its own layout component that provides the shell (sidebar + navbar + content area):

- `InstituteLayout` — Used by all Institute Admin pages. Has a dark sidebar with blue active states.
- `SuperAdminLayout` — Used by all Super Admin pages. Has a dark sidebar with indigo active states.
- `AuthLayout` — Used by authentication pages. Has a centered card layout with no sidebar.

Layouts use React Router's `<Outlet />` to render nested route content.

### Routing

Routing is centralized in `frontend/src/routes/AppRoutes.jsx`. Routes are organized by module:

- `/auth/*` — Public routes (Login, Forgot Password)
- `/institute/*` — Protected Institute Admin routes
- `/super-admin/*` — Protected Super Admin routes

Route protection is handled by:

- `ProtectedRoute` — Redirects unauthenticated users to login
- `PublicRoute` — Redirects authenticated users to their respective dashboard

### Reusable Components

Shared components live in `frontend/src/components/` and are organized by category:

- `common/` — Button, Card, Input, Modal, Loader, EmptyState, StatusBadge, Avatar, ConfirmDialog, SearchBox, etc.
- `ui/` — Dropdown, Tabs, Drawer, Tooltip, Toast
- `layout/` — Sidebar, Navbar, Topbar, Breadcrumb, PageHeader
- `dashboard/` — StatsCard, QuickActionCard, RecentActivity, WelcomeBanner
- `forms/` — TextField, SelectField, TextareaField, CheckboxField, DatePickerField
- `tables/` — DataTable, TablePagination

## Layouts

### AuthLayout

| Property           | Details                                              |
| ------------------ | ---------------------------------------------------- |
| **File**           | `frontend/src/layouts/AuthLayout.jsx`                |
| **Purpose**        | Centered layout for authentication pages             |
| **Pages using it** | Login, ForgotPassword                                |
| **Features**       | Minimal layout, centered card, no sidebar, no navbar |

### InstituteLayout

| Property           | Details                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**           | `frontend/src/layouts/InstituteLayout.jsx`                                                                                                         |
| **Purpose**        | Main layout for Institute Admin portal                                                                                                             |
| **Pages using it** | All pages under `/institute/*`                                                                                                                     |
| **Features**       | Dark sidebar (blue active), top navbar with profile dropdown + notifications, responsive mobile drawer, breadcrumb, Framer Motion page transitions |

### SuperAdminLayout

| Property           | Details                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File**           | `frontend/src/layouts/SuperAdminLayout.jsx`                                                                                                          |
| **Purpose**        | Main layout for Super Admin portal                                                                                                                   |
| **Pages using it** | All pages under `/super-admin/*`                                                                                                                     |
| **Features**       | Dark sidebar (indigo active), top navbar with profile dropdown + notifications, responsive mobile drawer, breadcrumb, Framer Motion page transitions |

## Routing

### Current Routing Structure

All routes are defined in `frontend/src/routes/AppRoutes.jsx`. The route tree is:

```
/auth                    PublicRoute > AuthLayout
  /login
  /forgot-password

/                        ProtectedRoute > InstituteLayout
  /                      → Redirect to /institute/dashboard
  institute/dashboard
  institute/students
  institute/students/add
  institute/students/:id
  institute/students/:id/edit
  institute/teachers
  institute/teachers/add
  institute/teachers/:id
  institute/classes
  institute/classes/add
  institute/attendance
  institute/attendance/mark
  institute/parents
  institute/fees
  institute/reports
  institute/settings

/super-admin             ProtectedRoute > SuperAdminLayout
  /                      → Redirect to /super-admin/dashboard
  dashboard
  institutes
  institutes/add
  institutes/:id
  institutes/:id/edit
  plans
  plans/add
  plans/:id/edit
  subscriptions
  users
  analytics
  support
  settings

*                        → Redirect to /institute/dashboard (fallback)
```

### Future Scalability

To add a new module (e.g., Teacher Portal), create:

1. A new layout (e.g., `TeacherLayout`)
2. Pages under `frontend/src/pages/teacher/`
3. A new route group in `AppRoutes.jsx`

## Modules

### Institute Module

Located at `frontend/src/pages/institute/`. Contains 17 pages across 9 sub-directories:

| Section    | Pages                                                |
| ---------- | ---------------------------------------------------- |
| Dashboard  | Dashboard                                            |
| Students   | StudentList, StudentDetails, AddStudent, EditStudent |
| Teachers   | TeacherList, TeacherDetails, AddTeacher              |
| Classes    | ClassList, AddClass                                  |
| Attendance | Attendance, MarkAttendance                           |
| Parents    | ParentList                                           |
| Fees       | FeeList                                              |
| Reports    | Reports                                              |
| Settings   | Settings                                             |

### Super Admin Module

Located at `frontend/src/pages/super-admin/`. Contains 13 pages across 8 sub-directories:

| Section       | Pages                                                        |
| ------------- | ------------------------------------------------------------ |
| Dashboard     | Dashboard                                                    |
| Institutes    | InstituteList, InstituteDetails, AddInstitute, EditInstitute |
| Plans         | PlanList, AddPlan, EditPlan                                  |
| Subscriptions | SubscriptionList                                             |
| Users         | UserList                                                     |
| Analytics     | Analytics                                                    |
| Support       | Support                                                      |
| Settings      | Settings                                                     |

## Shared Components

### Common Components (`frontend/src/components/common/`)

| Component           | Purpose                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Button**          | Versatile button with 5 variants (primary, secondary, danger, ghost, outline), 5 sizes, loading state, icon support |
| **Input**           | Text input with label, helper text, error state                                                                     |
| **Card**            | Container with header, title, description, content, footer sub-components                                           |
| **Modal**           | Dialog overlay for confirmations and forms                                                                          |
| **Loader**          | Full-page loading spinner                                                                                           |
| **LoadingSpinner**  | Inline spinner                                                                                                      |
| **LoadingSkeleton** | Placeholder skeleton (table, card, text variants)                                                                   |
| **EmptyState**      | Placeholder when no data exists (icon, title, description, action)                                                  |
| **ErrorState**      | Error display with retry action                                                                                     |
| **ConfirmDialog**   | Confirmation modal for destructive actions                                                                          |
| **SearchBox**       | Search input with icon                                                                                              |
| **StatusBadge**     | Colored badge for status values                                                                                     |
| **Avatar**          | User avatar with fallback initials                                                                                  |

### UI Components (`frontend/src/components/ui/`)

| Component    | Purpose                                   |
| ------------ | ----------------------------------------- |
| **Dropdown** | Menu dropdown with label, items, dividers |
| **Tabs**     | Tab navigation                            |
| **Drawer**   | Slide-out panel                           |
| **Tooltip**  | Hover tooltip                             |
| **Toast**    | Notification toast                        |

### Layout Components (`frontend/src/components/layout/`)

| Component             | Purpose                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **Sidebar**           | Institute Admin sidebar (dark, blue active, collapsible, mobile drawer) |
| **SuperAdminSidebar** | Super Admin sidebar (dark, indigo active, collapsible, mobile drawer)   |
| **Navbar**            | Top navigation bar (search, notifications, profile dropdown)            |
| **Breadcrumb**        | Auto-generated breadcrumb from route segments                           |
| **PageHeader**        | Page title, description, breadcrumb, action buttons                     |

### Dashboard Components (`frontend/src/components/dashboard/`)

| Component           | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| **StatsCard**       | Stat display card with icon, value, label, trend |
| **QuickActionCard** | Clickable card for quick navigation              |
| **RecentActivity**  | Activity feed list                               |
| **WelcomeBanner**   | Greeting banner with welcome message             |

### Form Components (`frontend/src/components/forms/`)

| Component           | Purpose                              |
| ------------------- | ------------------------------------ |
| **TextField**       | Text input with label and validation |
| **SelectField**     | Dropdown select with options         |
| **TextareaField**   | Multi-line text input                |
| **CheckboxField**   | Checkbox input                       |
| **DatePickerField** | Date input                           |

### Table Components (`frontend/src/components/tables/`)

| Component           | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| **DataTable**       | Sortable, paginated table with loading/empty states |
| **TablePagination** | Pagination controls                                 |

## UI Design System

### Typography

- **Font Family**: Inter (system sans-serif fallback)
- **Headings**: Bold, tracking-tight
- **Body**: Text-sm (14px), medium weight
- **Labels**: Text-xs (12px), uppercase, tracking-wider

### Colors

| Token                   | Usage                                      |
| ----------------------- | ------------------------------------------ |
| `primary-600` (#2563EB) | Primary buttons, active links, focus rings |
| `slate-900` (#0F172A)   | Headings, primary text                     |
| `slate-500` (#64748B)   | Secondary text, descriptions               |
| `slate-200` (#E2E8F0)   | Borders, dividers                          |
| `white`                 | Card backgrounds                           |
| `bg-surface` (#F8FAFC)  | Page backgrounds                           |
| `sidebar-bg` (#0F172A)  | Sidebar background                         |
| `danger` (#EF4444)      | Destructive actions                        |

### Cards

- Background: white
- Border: slate-200
- Border radius: rounded-xl (12px)
- Shadow: shadow-sm
- Padding: p-5
- Optional hover: hover:shadow-md hover:border-slate-300

### Tables

- Container: rounded-xl border border-slate-200 bg-white shadow-sm
- Header: bg-slate-50, text-xs uppercase tracking-wider
- Rows: divide-y divide-slate-100
- Hover: hover:bg-slate-50

### Forms

- Input: rounded-lg border border-slate-200 bg-slate-50
- Focus: ring-2 ring-primary-500 border-primary-500 bg-white
- Labels: text-sm font-medium text-slate-700

### Buttons

- 5 variants: primary, secondary, danger, ghost, outline
- 5 sizes: xs, sm, md, lg, xl
- Rounded: rounded-lg
- Loading: spinner + text replacement

### Animations

- **Page transitions**: Framer Motion opacity + y-axis slide (0.2s)
- **Sidebar**: Spring animation for open/close (stiffness: 300, damping: 30)
- **Card hover**: 200ms transition on shadow and border
- **Dropdowns**: Framer Motion for open/close
- **All animations**: Subtle, fast, never obstructive

### Spacing

- Page padding: px-4 lg:px-8, py-6 lg:py-8
- Card padding: p-5
- Grid gaps: gap-4 to gap-6
- Section spacing: mt-6

### Responsive Design

- **Desktop**: Full sidebar visible, multi-column grids
- **Tablet**: Collapsed sidebar, 2-column grids
- **Mobile**: Sidebar becomes overlay drawer, single column, hamburger menu

## Current Development Status

| Feature                                               | Status      |
| ----------------------------------------------------- | ----------- |
| Authentication UI                                     | ✅ Complete |
| Institute Admin — Dashboard                           | ✅ Complete |
| Institute Admin — Students (List, Details, Add, Edit) | ✅ Complete |
| Institute Admin — Teachers (List, Details, Add)       | ✅ Complete |
| Institute Admin — Classes (List, Add)                 | ✅ Complete |
| Institute Admin — Attendance (List, Mark)             | ✅ Complete |
| Institute Admin — Parents (List)                      | ✅ Complete |
| Institute Admin — Fees (List)                         | ✅ Complete |
| Institute Admin — Reports                             | ✅ Complete |
| Institute Admin — Settings                            | ✅ Complete |
| Super Admin — Dashboard                               | ✅ Complete |
| Super Admin — Institutes (List, Details, Add, Edit)   | ✅ Complete |
| Super Admin — Plans (List, Add, Edit)                 | ✅ Complete |
| Super Admin — Subscriptions (List)                    | ✅ Complete |
| Super Admin — Users (List)                            | ✅ Complete |
| Super Admin — Analytics                               | ✅ Complete |
| Super Admin — Support                                 | ✅ Complete |
| Super Admin — Settings                                | ✅ Complete |
| Backend API Integration                               | ❌ Pending  |
| Teacher Portal                                        | ❌ Pending  |
| Student Portal                                        | ❌ Pending  |
| Parent Portal                                         | ❌ Pending  |
| Authentication Logic                                  | ❌ Pending  |
| Real Data Fetching                                    | ❌ Pending  |

## Backend Preparation Notes

Based on the frontend structure, the Laravel backend will need to support:

### Authentication Module

- Login / Logout
- Password reset flow
- JWT or Sanctum token-based auth
- Role-based access control (Super Admin, Institute Admin, Teacher, Student, Parent)

### Institute Module

- CRUD for institutes (Super Admin only)
- Institute profile management
- Institute status (active/inactive/suspended)

### Student Module

- CRUD for students (Institute Admin only)
- Student enrollment with class assignment
- Student profile with contact details

### Teacher Module

- CRUD for teachers (Institute Admin only)
- Subject assignment
- Teacher profile with qualifications

### Class Module

- CRUD for classes
- Section management
- Class teacher assignment

### Attendance Module

- Daily attendance marking
- Attendance reports
- Date range filtering

### Fee Module

- Fee collection tracking
- Payment status
- Due date management

### Parent Module

- Parent/guardian records
- Link to students

### Subscription Module

- Plan management (Super Admin only)
- Institute subscription assignment
- Billing and renewal tracking
- Pricing tiers (Basic, Standard, Enterprise, Enterprise Plus)

### Analytics Module

- Platform-wide statistics (Super Admin)
- Per-institute statistics (Institute Admin)
- Revenue metrics
- Growth tracking

### Support Module

- Support ticket management (Super Admin)
- Ticket status workflow (open, in-progress, resolved)

### Settings Module

- Platform settings (Super Admin)
- Institute settings (Institute Admin)
- Email/SMTP configuration
- Security settings (2FA, session timeout)

## Summary

The SMP frontend is a modular, component-based React application with two complete portals (Institute Admin and Super Admin). The architecture emphasizes code reuse through a shared component library, consistent design patterns, and clear module separation. The routing is centralized and scalable, allowing new modules to be added without breaking existing functionality. The UI follows a premium enterprise aesthetic inspired by Stripe, Vercel, and Linear — using white cards, dark sidebars, blue primary colors, soft shadows, and subtle animations.

The frontend is currently **UI-complete** for both portals but has **no backend integration**. All pages render placeholder data and static UI. The next step is building the Laravel backend to support the API endpoints required by these frontend modules.
