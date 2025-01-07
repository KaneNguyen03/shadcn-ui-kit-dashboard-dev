import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatientVisitsChart } from "./components/patient-visits-chart";
import { PatientsByDepartmentChart } from "./components/patients-by-department-chart";
import { UpcomingAppointments } from "./components/upcoming-appointments";
import { PatientsWithLastProcedure } from "./components/patients-with-last-procedure";
import { generateMeta } from "@/lib/utils";
import { CalendarIcon, CreditCardIcon, DollarSignIcon, UsersIcon } from "lucide-react";
import CountAnimation from "@/components/ui/custom/count-animation";
import CalendarDateRangePicker from "@/components/date-range-picker";
import HospitalReports from "./reports";
import { PlannedCalendar } from "./components/planned-calendar";
import { Notes } from "./components/notes";

export async function generateMetadata() {
  return generateMeta({
    title: "Hospital Management",
    description:
      "The hospital dashboard is a dashboard used to manage, analyze hospital data and monitor operational processes.",
    canonical: "/hospital-management"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col justify-between space-y-6 lg:flex-row lg:items-center lg:space-y-2">
        <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Hospital Management</h2>
        <CalendarDateRangePicker />
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card className="overflow-hidden">
            <div className="grid space-y-2 md:grid-cols-2 lg:grid-cols-4 lg:space-y-0">
              <Card className="rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  <div className="absolute end-4 top-4 flex size-12 items-center justify-center rounded-full bg-indigo-200 p-4 dark:bg-indigo-950">
                    <CalendarIcon className="size-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">
                    <CountAnimation number={2350} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+20.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">New Patients</CardTitle>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-green-200 p-4 dark:bg-green-950">
                    <UsersIcon className="size-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">
                    <CountAnimation number={145} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+180.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-y-transparent border-s-transparent hover:bg-muted">
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">Operations</CardTitle>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-purple-200 p-4 dark:bg-purple-950">
                    <CreditCardIcon className="size-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">
                    <CountAnimation number={89} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-600">-19%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-none border-transparent hover:bg-muted">
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <div className="absolute end-4 top-4 flex size-12 items-end justify-start rounded-full bg-orange-200 p-4 dark:bg-orange-950">
                    <DollarSignIcon className="size-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">
                    $<CountAnimation number={9583} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+20.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </Card>
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-7 lg:space-y-0">
            <PatientVisitsChart />
            <PatientsByDepartmentChart />
          </div>
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-7 lg:space-y-0">
            <UpcomingAppointments />
            <PatientsWithLastProcedure />
          </div>
          <div className="gap-4 space-y-4 md:grid-cols-2 lg:grid lg:grid-cols-2 lg:space-y-0">
            <PlannedCalendar />
            <Notes />
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <HospitalReports />
        </TabsContent>
      </Tabs>
    </>
  );
}
