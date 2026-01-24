import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./@sidebar/page";

export default function DashboardLayout({
  content,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="flex ">
      <SidebarProvider>
        <aside className="max-w-96   bg-blue-50 h-screen  ">
          {/* sidebar */}
          <AppSidebar />
        </aside>
        {/* content */}
        <main className="flex-1 md:ps-10 bg-gray-100  min-h-screen">
          {content}
        </main>
      </SidebarProvider>
    </div>
  );
}
