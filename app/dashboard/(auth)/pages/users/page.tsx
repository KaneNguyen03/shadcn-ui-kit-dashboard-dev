import { promises as fs } from "fs";
import path from "path";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import UsersDataTable from "./data-table";
import { generateMeta } from "@/lib/utils";

export async function generateMetadata() {
  return generateMeta({
    title: "Users",
    description:
      "A list of users generated using the Tanstack Table. Built with Tailwind CSS, Shadcn UI and Next.js.",
    canonical: "/pages/users"
  });
}

async function getUsers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/(auth)/pages/users/data.json")
  );
  return JSON.parse(data.toString());
}

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
        <Button asChild>
          <Link href="#">
            <PlusCircledIcon className="me-2" /> Add New User
          </Link>
        </Button>
      </div>
      <UsersDataTable data={users} />
    </>
  );
}
