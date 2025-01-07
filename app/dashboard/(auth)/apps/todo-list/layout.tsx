/* import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";
import { generateMeta } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

export async function generateMetadata() {
  return generateMeta({
    title: "Todo List App",
    description:
      "Example of settings page and form created using react-hook-form and Zod validator. Built with Tailwind CSS and React.",
    canonical: "/apps/todo-list"
  });
}

const sidebarNavItems = [
  {
    title: "All",
    href: "/dashboard/apps/todo-list",
    task_count: 10
  },
  {
    title: "Completed",
    href: "/dashboard/apps/todo-list?a=1",
    task_count: 3
  },
  {
    title: "Archive",
    href: "/dashboard/apps/todo-list?a=1",
    task_count: 0
  },
  {
    title: "Backlog",
    href: "/dashboard/apps/todo-list?a=1",
    task_count: 30
  }
];

const workspaces = [
  {
    id: 1,
    name: "Bundui",
    href: "/dashboard/apps/todo-list?workspace=1"
  },
  {
    id: 2,
    name: "CakeAdmin",
    href: "/dashboard/apps/todo-list?workspace=2"
  },
  {
    id: 3,
    name: "UIKit",
    href: "/dashboard/apps/todo-list?workspace=3"
  },
  {
    id: 4,
    name: "Custom Project",
    href: "/dashboard/apps/todo-list?workspace=4"
  }
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Todo List</h2>
          <p className="text-muted-foreground">It&#39;s Monday, 25 September 2025</p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="space-y-4 lg:w-1/5">
          <Button className="w-full">
            <PlusCircleIcon className="me-2 h-4 w-4" /> New Task
          </Button>
          <div className="font-bold">Private</div>
          <SidebarNav items={sidebarNavItems} />
          <div className="font-bold">Workspace</div>
          <div className="flex flex-col gap-6 p-4">
            {workspaces.map((workspace) => {
              return (
                <div className="flex items-center space-x-2" key={workspace.id}>
                  <Checkbox id={`workspace${workspace.id}`} />
                  <label
                    htmlFor={`workspace${workspace.id}`}
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {workspace.name}
                  </label>
                </div>
              );
            })}
          </div>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
 */

import { generateMeta } from "@/lib/utils";
import { AlertCircleIcon } from "lucide-react";

export async function generateMetadata() {
  return generateMeta({
    title: "Todo List App",
    description:
      "Example of settings page and form created using react-hook-form and Zod validator. Built with Tailwind CSS and React.",
    canonical: "/apps/todo-list"
  });
}

export default function Page() {
  return (
    <div className="flex h-[90vh] items-center justify-center text-center">
      <div className="max-w-screen-sm space-y-4">
        <h1 className="flex items-center justify-center text-3xl font-bold tracking-tight lg:text-4xl">
          <svg
            className="mr-5 h-9 w-9 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Todo List App
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <AlertCircleIcon className="h-4 w-4 text-orange-400" />
          This page is currently under construction.
        </div>
      </div>
    </div>
  );
}
