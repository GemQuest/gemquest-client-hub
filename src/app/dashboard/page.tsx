"use client";

import DataTable from "@/components/dashboard/DataTable";

// Mock data (replace with actual data fetching in a real application)
const users = [
  { id: 1, user: "John Doe", name: "John Doe", email: "john@example.com", role: "Admin", roleGroup: "Management" },
  { id: 2, user: "Jane Smith", name: "Jane Smith", email: "jane@example.com", role: "User", roleGroup: "Sales" },
];

const experiences = [
  { id: 1, name: "Summer Sale", description: "Annual summer promotion", client: "RetailCo", createdAt: "2023-06-01", createdBy: "John Doe" },
  { id: 2, name: "New Product Launch", description: "Launch campaign for XYZ product", client: "TechInc", createdAt: "2023-07-15", createdBy: "Jane Smith" },
];

const nfts = [
  { id: 1, name: "Summer Collection #1", hash: "0xabc123...", client: "RetailCo" },
  { id: 2, name: "Fall Collection #2", hash: "0xdef456...", client: "TechInc" },
];

export default function Dashboard() {
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
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-neutralLight mb-6">Welcome to the GemQuest Dashboard</h1>
      
      {/* Users Table */}
      <DataTable
        title="Users"
        data={users}
        filters={userFilters}
        onEdit={(row) => console.log("Edit User:", row)}
        onDelete={(row) => console.log("Delete User:", row)}
      />
      
      {/* Experiences Table */}
      <DataTable
        title="Experiences"
        data={experiences}
        filters={experienceFilters}
        onEdit={(row) => console.log("Edit Experience:", row)}
        onDelete={(row) => console.log("Delete Experience:", row)}
      />
      
      {/* NFTs Table */}
      <DataTable
        title="NFTs"
        data={nfts}
        filters={nftFilters}
        onEdit={(row) => console.log("Edit NFT:", row)}
        onDelete={(row) => console.log("Delete NFT:", row)}
      />
    </div>
  );
}
