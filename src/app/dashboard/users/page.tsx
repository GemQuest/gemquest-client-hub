// app/dashboard/users/page.tsx
"use client";

import DataTable from "@/components/dashboard/DataTable";

// Mock data (replace with actual data fetching in a real application)
const users = [
    {
      id: 1,
      user: "John Doe",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      roleGroup: "Management",
    },
    {
      id: 2,
      user: "Jane Smith",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      roleGroup: "Sales",
    },
    // Add more users...
  ];

  // Define columns for each table
  const userColumns = [
    { header: "User", accessor: "user", sortable: false },
    { header: "ID", accessor: "id", sortable: true },
    { header: "Name", accessor: "name", sortable: true },
    { header: "Email", accessor: "email", sortable: true },
    { header: "Role", accessor: "role", sortable: true },
    { header: "Role Group", accessor: "roleGroup", sortable: true },
  ];

export default function UsersPage() {
  return (
    <div className="space-y-8">
      {/* Users Table */}
      <DataTable
        title="Users"
        columns={userColumns}
        data={users}
        filters={{ role: ["Admin", "User"], roleGroup: ["Management", "Sales"] }}
        searchPlaceholder="Search users..."
      />
    </div>
  );
}
