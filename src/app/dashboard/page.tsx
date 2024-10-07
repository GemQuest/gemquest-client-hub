// app/dashboard/page.tsx
"use client";

import DataTable from "@/components/dashboard/DataTable";

// Mock data (replace with actual data fetching in a real application)
const users = [
  { id: 1, user: "John Doe", name: "John Doe", email: "john@example.com", role: "Admin", roleGroup: "Management" },
  { id: 2, user: "Jane Smith", name: "Jane Smith", email: "jane@example.com", role: "User", roleGroup: "Sales" },
  // Add more users...
];

const experiences = [
  { id: 1, name: "Summer Sale", description: "Annual summer promotion", client: "RetailCo", createdAt: "2023-06-01", createdBy: "John Doe" },
  { id: 2, name: "New Product Launch", description: "Launch campaign for XYZ product", client: "TechInc", createdAt: "2023-07-15", createdBy: "Jane Smith" },
  // Add more experiences...
];

const nfts = [
  { id: 1, name: "Summer Collection #1", hash: "0xabc123...", client: "RetailCo" },
  { id: 2, name: "Fall Collection #2", hash: "0xdef456...", client: "TechInc" },
  // Add more NFTs...
];

export default function Dashboard() {
  const userColumns = [
    { header: "User", accessor: "user", sortable: true, filterable: true },
    { header: "Name", accessor: "name", sortable: true, filterable: true },
    { header: "Email", accessor: "email", sortable: true, filterable: true },
    { header: "Role", accessor: "role", sortable: true, filterable: true },
    { header: "Role Group", accessor: "roleGroup", sortable: true, filterable: true },
  ];

  const experienceColumns = [
    { header: "Name", accessor: "name", sortable: true, filterable: true },
    { header: "Description", accessor: "description", sortable: true },
    { header: "Client", accessor: "client", sortable: true, filterable: true },
    { header: "Created At", accessor: "createdAt", sortable: true },
    { header: "Created By", accessor: "createdBy", sortable: true },
  ];

  const nftColumns = [
    { header: "Name", accessor: "name", sortable: true, filterable: true },
    { header: "Hash", accessor: "hash", sortable: true },
    { header: "Client", accessor: "client", sortable: true, filterable: true },
  ];

  const userFilters = {
    role: ["Admin", "User"],
    roleGroup: ["Management", "Sales"],
  };

  const experienceFilters = {
    client: ["RetailCo", "TechInc"],
  };

  const nftFilters = {
    client: ["RetailCo", "TechInc"],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-neutralLight mb-6">Welcome to the GemQuest Dashboard</h1>
      <DataTable title="Users" columns={userColumns} data={users} filters={userFilters} />
      <DataTable title="Experiences" columns={experienceColumns} data={experiences} filters={experienceFilters} />
      <DataTable title="NFTs" columns={nftColumns} data={nfts} filters={nftFilters} />
    </div>
  );
}
