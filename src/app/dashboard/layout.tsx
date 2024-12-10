// app/dashboard/layout.tsx
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ReactNode } from "react";

interface DashboardPageLayoutProps {
  children: ReactNode;
}

export default function DashboardPageLayout({ children }: DashboardPageLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
