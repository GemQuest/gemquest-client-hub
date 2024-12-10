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

export default function UsersPage() {
  
  const userFilters = {
    role: ["Admin", "User"],
    roleGroup: ["Management", "Sales"],
  };

  return (
    <div className="space-y-8">
      {/* Users Table */}
      <DataTable
        title="Users"
        data={users}
        filters={userFilters}
        onEdit={(row) => console.log("Edit User:", row)}
        onDelete={(row) => console.log("Delete User:", row)}
      />
    </div>
  );
}
