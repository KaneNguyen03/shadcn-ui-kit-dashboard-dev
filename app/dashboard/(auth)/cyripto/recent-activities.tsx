import { CardOptionsMenu } from "@/components/CardActionMenus";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function RecentActivities() {
  return (
    <Card className="xl:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Recent Activities
          <CardOptionsMenu />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/bitcoin.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Buy Bitcoin</p>
              <p className="text-sm text-muted-foreground">Nov 12, 2024 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 BTC</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/ethereum.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Buy Ethereum</p>
              <p className="text-sm text-muted-foreground">Nov 28, 2024 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 ETH</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/dogecoin.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Sell Dogecoin</p>
              <p className="text-sm text-muted-foreground">Nov 10, 2024 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 DOGE</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/tether.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Buy Tether</p>
              <p className="text-sm text-muted-foreground">Nov 12, 2024 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 USDT</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/toncoin.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Toncoin</p>
              <p className="text-sm text-muted-foreground">Sept 04, 2024 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 TON</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-muted p-2"
              src={process.env.DASHBOARD_BASE_URL + "/cyripto-icons/avalanche.svg"}
            />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Avalanche</p>
              <p className="text-sm text-muted-foreground">Nov 12, 2019 11:34 PM</p>
            </div>
            <div className="ml-auto flex flex-col text-end">
              <span>0.5384 AVAX</span>
              <span className="text-sm text-muted-foreground">3,980.93 USD</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
