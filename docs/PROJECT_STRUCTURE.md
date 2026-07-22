# Project Structure — Student Management Portal (SMP)

## Complete Folder Tree

The following is the actual project structure of the SMP frontend application:

```
d:\student-management\
├── docs/
│   ├── FRONTEND_ARCHITECTURE.md
│   └── PROJECT_STRUCTURE.md
│
└── frontend/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── README.md
    ├── public/
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        ├── index.css
        │
        ├── api/                    # API service layer (empty)
        ├── assets/                 # Static assets
        │   ├── hero.png
        │   ├── react.svg
        │   ├── vite.svg
        │   ├── icons/
        │   ├── illustrations/
        │   └── images/
        │
        ├── components/             # Reusable UI components
        │   ├── common/             # Generic reusable components
        │   │   ├── index.js
        │   │   ├── Avatar.jsx
        │   │   ├── Button.jsx
        │   │   ├── Card.jsx
        │   │   ├── ConfirmDialog.jsx
        │   │   ├── EmptyState.jsx
        │   │   ├── ErrorState.jsx
        │   │   ├── Input.jsx
        │   │   ├── Loader.jsx
        │   │   ├── LoadingSkeleton.jsx
        │   │   ├── LoadingSpinner.jsx
        │   │   ├── Modal.jsx
        │   │   ├── SearchBox.jsx
        │   │   └── StatusBadge.jsx
        │   │
        │   ├── dashboard/          # Dashboard-specific components
        │   │   ├── index.js
        │   │   ├── QuickActionCard.jsx
        │   │   ├── RecentActivity.jsx
        │   │   ├── StatsCard.jsx
        │   │   └── WelcomeBanner.jsx
        │   │
        │   ├── forms/              # Form field components
        │   │   ├── index.js
        │   │   ├── CheckboxField.jsx
        │   │   ├── DatePickerField.jsx
        │   │   ├── SelectField.jsx
        │   │   ├── TextareaField.jsx
        │   │   └── TextField.jsx
        │   │
        │   ├── layout/             # Layout components
        │   │   ├── index.js
        │   │   ├── Breadcrumb.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── PageHeader.jsx
        │   │   ├── Sidebar.jsx          # Institute Admin sidebar
        │   │   ├── SuperAdminSidebar.jsx # Super Admin sidebar
        │   │   └── Topbar.jsx
        │   │
        │   ├── tables/             # Table components
        │   │   ├── index.js
        │   │   ├── DataTable.jsx
        │   │   └── TablePagination.jsx
        │   │
        │   └── ui/                 # UI primitive components
        │       ├── index.js
        │       ├── Drawer.jsx
        │       ├── Dropdown.jsx
        │       ├── Tabs.jsx
        │       ├── Toast.jsx
        │       └── Tooltip.jsx
        │
        ├── contexts/               # React contexts
        │   └── SidebarContext.jsx
        │
        ├── hooks/                  # Custom React hooks
        │   ├── index.js
        │   ├── useClickOutside.js
        │   ├── useDebounce.js
        │   └── useMediaQuery.js
        │
        ├── layouts/                # Page layout wrappers
        │   ├── AuthLayout.jsx
        │   ├── InstituteLayout.jsx
        │   └── SuperAdminLayout.jsx
        │
        ├── pages/                  # Feature-based page modules
        │   ├── auth/
        │   │   ├── ForgotPassword.jsx
        │   │   └── Login.jsx
        │   │
        │   ├── institute/          # Institute Admin portal
        │   │   ├── attendance/
        │   │   │   ├── Attendance.jsx
        │   │   │   └── MarkAttendance.jsx
        │   │   ├── classes/
        │   │   │   ├── AddClass.jsx
        │   │   │   └── ClassList.jsx
        │   │   ├── dashboard/
        │   │   │   └── Dashboard.jsx
        │   │   ├── fees/
        │   │   │   └── FeeList.jsx
        │   │   ├── parents/
        │   │   │   └── ParentList.jsx
        │   │   ├── reports/
        │   │   │   └── Reports.jsx
        │   │   ├── settings/
        │   │   │   └── Settings.jsx
        │   │   ├── students/
        │   │   │   ├── AddStudent.jsx
        │   │   │   ├── EditStudent.jsx
        │   │   │   ├── StudentDetails.jsx
        │   │   │   └── StudentList.jsx
        │   │   └── teachers/
        │   │       ├── AddTeacher.jsx
        │   │       ├── TeacherDetails.jsx
        │   │       └── TeacherList.jsx
        │   │
        │   └── super-admin/        # Super Admin portal
        │       ├── analytics/
        │       │   └── Analytics.jsx
        │       ├── dashboard/
        │       │   └── Dashboard.jsx
        │       ├── institutes/
        │       │   ├── AddInstitute.jsx
        │       │   ├── EditInstitute.jsx
        │       │   ├── InstituteDetails.jsx
        │       │   └── InstituteList.jsx
        │       ├── plans/
        │       │   ├── AddPlan.jsx
        │       │   ├── EditPlan.jsx
        │       │   └── PlanList.jsx
        │       ├── settings/
        │       │   └── Settings.jsx
        │       ├── subscriptions/
        │       │   └── SubscriptionList.jsx
        │       ├── support/
        │       │   └── Support.jsx
        │       └── users/
        │           └── UserList.jsx
        │
        ├── routes/                 # Routing configuration
        │   ├── AppRoutes.jsx
        │   ├── ProtectedRoute.jsx
        │   └── PublicRoute.jsx
        │
        ├── services/               # Service layer (empty)
        ├── store/                  # State management (empty)
        ├── styles/                 # Additional styles (empty)
        ├── types/                  # TypeScript types (empty)
        │
        └── utils/                  # Utility functions
            ├── cn.js               # Tailwind class merging utility
            └── index.js
```

## Major Folder Explanations

### `frontend/` — Root Application Directory

Contains the entire React application. All source code, configuration, assets, and build output live here.

### `frontend/src/` — Source Code

The main source code directory. Contains all application logic, components, pages, routing, and utilities.

#### `frontend/src/api/`

**Purpose**: API service layer for making HTTP requests to the backend.

**Current State**: Empty folder. No API services have been created yet. When the backend is ready, this folder should contain Axios instance configurations, API endpoint functions, and request/response interceptors.

**Place files here**: API client files organized by module (e.g., `authApi.js`, `instituteApi.js`, `studentApi.js`).

#### `frontend/src/components/`

**Purpose**: All reusable UI components organized by category.

**Responsibilities**:

- `common/` — Generic components used across all modules (Button, Card, Modal, etc.)
- `ui/` — Low-level UI primitives (Dropdown, Tabs, Tooltip, etc.)
- `layout/` — Structural layout components (Sidebar, Navbar, Breadcrumb, etc.)
- `dashboard/` — Dashboard-specific reusable cards and widgets
- `forms/` — Form field components with validation support
- `tables/` — Table and pagination components

**Place files here**: Any component that is used by multiple pages or modules. If a component is only used by a single page, place it in that page's folder instead.

#### `frontend/src/contexts/`

**Purpose**: React context providers for global state.

**Current Contents**:

- `SidebarContext.jsx` — Manages sidebar open/close and collapsed state. Used by both `Sidebar` and `SuperAdminSidebar`.

**Place files here**: Global state contexts that need to be shared across multiple components.

#### `frontend/src/hooks/`

**Purpose**: Custom React hooks encapsulating reusable logic.

**Current Contents**:

- `useMediaQuery.js` — Responsive design breakpoint detection
- `useClickOutside.js` — Detect clicks outside an element (for dropdowns/modals)
- `useDebounce.js` — Debounce values for search inputs

**Place files here**: Any custom hook that encapsulates logic reusable across components.

#### `frontend/src/layouts/`

**Purpose**: Page layout wrapper components that provide the shell structure.

**Current Contents**:

- `AuthLayout.jsx` — Centered card layout for authentication pages
- `InstituteLayout.jsx` — Sidebar + Navbar layout for Institute Admin
- `SuperAdminLayout.jsx` — Sidebar + Navbar layout for Super Admin

**Place files here**: A new layout should be created for each new user portal (e.g., `TeacherLayout.jsx`).

#### `frontend/src/pages/`

**Purpose**: Feature-based page modules.

**How it works**: Each module gets its own folder under `pages/`. Inside each module folder, sub-folders group related pages.

**Current Modules**:

- `auth/` — Authentication pages
- `institute/` — Institute Admin portal pages
- `super-admin/` — Super Admin portal pages

**Place files here**: New page files grouped by module. Each module should have its own sub-folder under `pages/`.

#### `frontend/src/routes/`

**Purpose**: Centralized route definitions and route guards.

**Current Contents**:

- `AppRoutes.jsx` — All route definitions organized by module
- `ProtectedRoute.jsx` — Route guard that redirects unauthenticated users to login
- `PublicRoute.jsx` — Route guard that redirects authenticated users away from login

**Place files here**: Only routing-related files. Do not place page components here.

#### `frontend/src/services/`

**Purpose**: Business logic service layer.

**Current State**: Empty. Will contain service files that orchestrate API calls and data transformation.

#### `frontend/src/store/`

**Purpose**: Global state management.

**Current State**: Empty. May be used for Zustand, Redux, or other state management libraries in the future.

#### `frontend/src/styles/`

**Purpose**: Additional CSS or style files.

**Current State**: Empty. Tailwind CSS v4 handles all styling via `index.css`.

#### `frontend/src/types/`

**Purpose**: TypeScript type definitions and interfaces.

**Current State**: Empty. The project is JavaScript-based but TypeScript types can be added incrementally.

#### `frontend/src/utils/`

**Purpose**: Utility functions shared across the application.

**Current Contents**:

- `cn.js` — Class name merging utility using `clsx` and `tailwind-merge`
- `index.js` — Re-exports for convenient imports

## Module Structure

The project is organized into feature-based modules. Each module represents a distinct user-facing section of the application.

### Institute Module (`frontend/src/pages/institute/`)

| Sub-folder    | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `dashboard/`  | Main landing page with stats, quick actions, recent activity |
| `students/`   | Student CRUD (List, Details, Add, Edit)                      |
| `teachers/`   | Teacher management (List, Details, Add)                      |
| `classes/`    | Class management (List, Add)                                 |
| `attendance/` | Attendance tracking (List, Mark)                             |
| `parents/`    | Parent/guardian records (List)                               |
| `fees/`       | Fee collection records (List)                                |
| `reports/`    | Report generation (Summary)                                  |
| `settings/`   | Institute configuration (Settings)                           |

**Corresponding routes**: All under `/institute/*`

### Super Admin Module (`frontend/src/pages/super-admin/`)

| Sub-folder       | Description                                    |
| ---------------- | ---------------------------------------------- |
| `dashboard/`     | Platform overview with metrics                 |
| `institutes/`    | Institute CRUD (List, Details, Add, Edit)      |
| `plans/`         | Subscription plan management (List, Add, Edit) |
| `subscriptions/` | Institute subscription records (List)          |
| `users/`         | Platform user management (List)                |
| `analytics/`     | Platform-wide analytics and insights           |
| `support/`       | Support ticket management                      |
| `settings/`      | Global platform settings                       |

**Corresponding routes**: All under `/super-admin/*`

### Authentication Module (`frontend/src/pages/auth/`)

| File                 | Description                 |
| -------------------- | --------------------------- |
| `Login.jsx`          | User login form             |
| `ForgotPassword.jsx` | Password reset request form |

### Future Modules

When adding new portals, create new sub-folders under `pages/`:

- `teacher/` — Teacher portal (classes, attendance, grades)
- `student/` — Student portal (grades, attendance, schedule)
- `parent/` — Parent portal (student progress, communication)

## Naming Conventions

### Components

- **PascalCase** for component names: `Button.jsx`, `DataTable.jsx`, `StudentList.jsx`
- Component names match their file names: `function StudentList() { ... }` lives in `StudentList.jsx`
- Named exports (`export { ComponentName }`) rather than default exports

### Pages

- PascalCase filenames: `StudentList.jsx`, `InstituteDetails.jsx`
- Descriptive names that match the route purpose
- Suffixes for CRUD operations: `List`, `Details`, `Add`, `Edit`

### Layouts

- PascalCase with "Layout" suffix: `InstituteLayout.jsx`, `SuperAdminLayout.jsx`

### Sidebars

- PascalCase with "Sidebar" suffix: `Sidebar.jsx` (Institute), `SuperAdminSidebar.jsx` (Super Admin)

### Folders

- **kebab-case** for multi-word folder names: `super-admin/`, `forgot-password/`
- **camelCase** for component category folders inside `components/`: `common/`, `layout/`, `forms/`, `tables/`, `dashboard/`, `ui/`

### Routes

- **kebab-case** for route paths: `/institute/students/add`, `/super-admin/institutes`
- Parameters use `:param` syntax: `/institute/students/:id`

## Import Strategy

### Current Import Pattern

Imports use **relative paths** from the importing file to the target module:

```jsx
// From a page inside src/pages/institute/students/
import { PageHeader } from "../../../components/layout/PageHeader";
import { Button } from "../../../components/common/Button";

// From src/routes/AppRoutes.jsx
import { InstituteLayout } from "../layouts/InstituteLayout";
import { Dashboard } from "../pages/institute/dashboard/Dashboard";
```

### Path Aliases

The project does **not** currently use path aliases (like `@/components/Button`). All imports use relative paths with `../` traversal.

### Recommendation

Path aliases should be added to the Vite configuration for cleaner imports. This would allow:

```jsx
import { Button } from "@common/Button";
import { PageHeader } from "@layout/PageHeader";
import { DataTable } from "@tables/DataTable";
```

Add the following to `vite.config.js`:

```js
resolve: {
  alias: {
    '@common': '/src/components/common',
    '@layout': '/src/components/layout',
    '@pages': '/src/pages',
    '@components': '/src/components',
  }
}
```

## Reusable Component Strategy

### Global Components (in `src/components/`)

These components are designed to be used across all modules and pages:

| Category  | Components                                                                                                                                 | Usage                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Common    | Button, Card, Modal, Input, EmptyState, StatusBadge, Avatar, SearchBox, ConfirmDialog, Loader, LoadingSpinner, LoadingSkeleton, ErrorState | Any page that needs these UI patterns    |
| UI        | Dropdown, Tabs, Drawer, Tooltip, Toast                                                                                                     | Interaction patterns used across modules |
| Layout    | Sidebar, SuperAdminSidebar, Navbar, Breadcrumb, PageHeader                                                                                 | Layout shells for portals                |
| Dashboard | StatsCard, QuickActionCard, RecentActivity, WelcomeBanner                                                                                  | Dashboard pages in any portal            |
| Forms     | TextField, SelectField, TextareaField, CheckboxField, DatePickerField                                                                      | Any form in any module                   |
| Tables    | DataTable, TablePagination                                                                                                                 | Any list/datatable page                  |

### Module-Specific Components

Some components exist directly inside page folders because they are only used by that specific module. For example, the stat cards in `super-admin/dashboard/Dashboard.jsx` use inline data rather than a shared component (though they could have been extracted).

### Prevention of Duplication

1. **Check `src/components/common/` first** before creating a new component — the component likely already exists.
2. **Use `DataTable` for all list views** — it handles loading, empty, sorting, and pagination states.
3. **Use `PageHeader` for all page headers** — it provides consistent title, description, breadcrumb, and action button layout.
4. **Use `Card` with its sub-components** (`Card.Header`, `Card.Title`, `Card.Content`, `Card.Footer`) for consistent card layouts.
5. **Use `StatusBadge` for all status displays** — it provides consistent coloring for active/inactive/pending/resolved states.
6. **If a component is used in more than one page**, extract it to the appropriate folder in `components/`.

## Best Practices

### Creating New Pages

1. Create a new folder under the appropriate module in `pages/`:
   - `pages/institute/` for Institute Admin
   - `pages/super-admin/` for Super Admin
   - `pages/teacher/`, `pages/student/`, `pages/parent/` for future portals
2. Use `PageHeader` for the page title and actions
3. Use `Card` for content containers
4. Use `DataTable` for list views
5. Use `Button` for actions
6. Use `SearchBox` for search functionality
7. Export using named exports: `export { ComponentName }`

### Creating Reusable Components

1. Determine if the component belongs to `common/`, `ui/`, `forms/`, `tables/`, `layout/`, or `dashboard/`
2. Use the `cn()` utility from `../../utils` for class name merging
3. Use Framer Motion for animations
4. Use Lucide React for icons
5. Support `className` prop for customization
6. Export using named exports

### Extending Routing

1. Open `frontend/src/routes/AppRoutes.jsx`
2. Import the new layout and page components
3. Add a new `<Route>` group inside the `<Routes>` block
4. Use `ProtectedRoute` for authenticated routes
5. Use `PublicRoute` for public routes (login, forgot password)
6. Keep route paths kebab-case

### Creating New Layouts

1. Create the layout component in `frontend/src/layouts/`
2. Import and render the sidebar, navbar, and `<Outlet />`
3. Create a corresponding sidebar component in `frontend/src/components/layout/` if needed
4. Register the layout in `AppRoutes.jsx`

### Keeping the Project Scalable

1. **Modules are independent** — Each module under `pages/` should be self-contained and not import from other modules.
2. **Shared components are the bridge** — Cross-module sharing goes through `components/`.
3. **Layouts are separate** — Each portal gets its own layout and sidebar.
4. **Routes are centralized** — All routing is in one file (`AppRoutes.jsx`) for visibility.
5. **No business logic in components** — Keep components focused on rendering. Business logic belongs in services/hooks.
6. **Use named exports consistently** — This enables better tree-shaking and import optimization.
7. **Keep the component library lean** — Only create components that solve actual reuse needs. Avoid premature abstraction.
