import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, Award, Briefcase, DollarSign, FileClock } from "lucide-react";
import { OverviewChart } from "./overview-chart";
import CalendarDateRangePicker from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { generateMeta } from "@/lib/utils";
import { RecentProjectList } from "./recent-projects-table";
import ProjectEfficiency from "./project-efficiency";
import Reminders from "./reminders";
import AchievementByYear from "./achievement-by-year";

export async function generateMetadata() {
  return generateMeta({
    title: "Project Management Dashboard",
    description:
      "The project management dashboard template provides a powerful and intuitive interface for tracking tasks, deadlines, and team progress to ensure project success.",
    canonical: "/project-management"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Project Management</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.423</div>
            <p className="text-xs text-muted-foreground">+5.02 % from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">New Leads</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,423</div>
            <p className="text-xs text-muted-foreground">-3.58 % from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Hours</CardTitle>
            <FileClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">168h 40m</div>
            <p className="text-xs text-muted-foreground">+10.35 % from last month</p>
          </CardContent>
        </Card>
        {/*  */}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OverviewChart />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>357</CardTitle>
            <CardDescription>Professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm font-bold">Today’s Heroes</p>
            <div className="flex -space-x-4">
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full border-4 border-background"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <p className="mb-2 mt-8 text-sm font-bold">Highlights</p>
            <div className="divide-y *:py-3">
              <div className="flex justify-between">
                <span>Avg. Client Rating</span>
                <span className="flex items-center gap-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  7.8 / 10
                </span>
              </div>
              <div className="flex justify-between">
                <span>Avg. Quotes</span>
                <span className="flex items-center gap-1">
                  <ArrowDownLeft className="h-4 w-4 text-red-600" />
                  730
                </span>
              </div>
              <div className="flex justify-between">
                <span>Avg. Agent Earnings</span>
                <span className="flex items-center gap-1">
                  <ArrowUpRight className="h-4 w-4 text-green-600" /> $2,309
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
        <Reminders />
        <AchievementByYear />
        <ProjectEfficiency />
      </div>
      <RecentProjectList />
    </>
  );
}
