// app/dashboard/users/page.tsx
"use client";

import DataTable from "@/components/dashboard/DataTable";


const nfts = [
  { id: 1, name: "Summer Collection #1", hash: "0xabc123...", client: "RetailCo" },
  { id: 2, name: "Fall Collection #2", hash: "0xdef456...", client: "TechInc" },
];

const page = () => {
  

  const nftFilters = {
    client: ["RetailCo", "TechInc"],
  };

  return (
    <div className="space-y-8">
            {/* NFTs Table */}
      <DataTable
        title="NFTs"
        data={nfts}
        filters={nftFilters}
        onEdit={(row) => console.log("Edit NFT:", row)}
        onDelete={(row) => console.log("Delete NFT:", row)}
      />
    </div>
  )
}

export default page