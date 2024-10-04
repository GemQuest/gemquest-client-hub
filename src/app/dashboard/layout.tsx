// src/app/dashboard/layout.tsx
import { useSession } from 'next-auth/react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  if (!session) {
    // Redirect to login if not authenticated
    return <div>Please log in</div>
  }

  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
