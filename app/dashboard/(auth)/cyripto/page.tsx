import { generateMeta } from "@/lib/utils";

import CyriptoCurrencyPriceCards from "./cyripto-currency-price-cards";
import DigitalWallets from "./digital-wallets";
import { RecentActivities } from "./recent-activities";
import { BalanceSummeryChart } from "./balance-summary";
import CoinBuySell from "./coin-buy-sell";
import CalendarDateRangePicker from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import OverviewCard from "./overview-card";

export async function generateMetadata() {
  return generateMeta({
    title: "Cyripto Dashboard",
    description:
      "Cyripto dashboard template is a comprehensive and intuitive interface to effectively monitor cryptocurrency prices, market trends and portfolio performance.",
    canonical: "/cyripto"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cyripto Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <div className="mb-4">
        <CyriptoCurrencyPriceCards />
      </div>
      <div className="space-y-4">
        <div className="gap-4 space-y-4 lg:grid lg:grid-cols-6 lg:space-y-0">
          <OverviewCard />
          <DigitalWallets />
          <CoinBuySell />
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <RecentActivities />
          <BalanceSummeryChart />
        </div>
      </div>
    </>
  );
}
