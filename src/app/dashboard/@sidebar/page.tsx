import { FolderCode, GraduationCap, User } from "lucide-react";
import Image from "next/image";
import { DropdownMenuDemo } from "../_components/drop-down";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { NavLink } from "@/components/nav-link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default async function AppSidebar() {
  const session = await getServerSession(authOptions);

  return (
    <Sidebar className="flex flex-col h-screen w-72 p-5 bg-blue-50 text-gray-700 ">
      {/* Header */}
      <SidebarHeader className="bg-blue-50 ">
        <div
          className="w-48 h-9 mx-auto bg-gray-700"
          style={{
            WebkitMaskImage:
              "url('/assets/icons/0b7894f3f9e34690bf0c8b5b2e5d087debd7b25e.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage:
              "url('/assets/icons/0b7894f3f9e34690bf0c8b5b2e5d087debd7b25e.png')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
        <h1 className="text-blue-600 flex items-center ms-4 gap-2 py-4 font-semibold text-xl">
          <FolderCode size={30} /> Exam App
        </h1>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="flex-1 bg-blue-50">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    href="/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                  >
                    <GraduationCap />
                    Diplomas
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    href="/dashboard/setting"
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
                  >
                    <User />
                    Account Settings
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <footer className="mt-auto flex items-center gap-3 p-4 border-t bg-blue-50 border-gray-200">
        <div className="relative w-10 h-10">
          <Image
            src="/assets/images/avatar.jpg"
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full object-cover flex-shrink-0"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-blue-600 font-medium truncate">
            {session?.user?.firstName || "Guest"}
          </h4>
          <span className="text-sm text-gray-500 truncate block">
            {session?.user?.email || ""}
          </span>
        </div>
        <DropdownMenuDemo />
      </footer>
    </Sidebar>
  );
}
