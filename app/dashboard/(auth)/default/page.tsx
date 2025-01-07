import CalendarDateRangePicker from "@/components/date-range-picker";
import TeamMembersCard from "./cards/theme-members";
import SubscriptionsCard from "./cards/subscriptions";
import TotalRevenueCard from "./cards/total-revenue";
import { ChatCard } from "./cards/chat";
import { Button } from "@/components/ui/button";
import MetricCard from "./cards/metric";
import { PaymentsCard } from "./cards/payment";
import { PaymentMethodCard } from "./cards/payment-method";
import { generateMeta } from "@/lib/utils";

export async function generateMetadata() {
  return generateMeta({
    title: "Dashboard",
    description:
      "The admin dashboard template offers a sleek and efficient interface for monitoring important data and user interactions. Built with Tailwind CSS and Next.js.",
    canonical: "/default"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="gap-4 space-y-4 lg:grid lg:grid-cols-3 lg:space-y-0">
        <TeamMembersCard />
        <SubscriptionsCard />
        <TotalRevenueCard />
        <ChatCard />
        <div className="lg:col-span-2">
          <MetricCard className="h-full" />
        </div>
        <div className="lg:col-span-2">
          <PaymentsCard className="h-full" />
        </div>
        <PaymentMethodCard />
      </div>
    </>
  );
}
