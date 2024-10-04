// src/app/dashboard/page.tsx
export default function DashboardLanding() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Experience summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Experiences</h2>
            <p>Number of Experiences: 10</p>
          </div>
          {/* NFT summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">NFTs</h2>
            <p>Number of NFTs: 25</p>
          </div>
          {/* Employees summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Employees</h2>
            <p>Number of Employees: 15</p>
          </div>
        </div>
      </div>
    )
  }
  