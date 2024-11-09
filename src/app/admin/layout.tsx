import { Suspense } from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

import navigation from "./navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <AppProvider navigation={navigation}>
        <DashboardLayout>
          <PageContainer>{children}</PageContainer>
        </DashboardLayout>
      </AppProvider>
    </Suspense>
  );
}
