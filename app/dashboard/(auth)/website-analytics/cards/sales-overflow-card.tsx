import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SaleOverviewCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Sales Overview</CardTitle>
        <CardDescription>+20.1% from last month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-2xl font-bold">$42.5k</div>
        <div className="grid grid-cols-2 gap-4 divide-x">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">62.2%</div>
            <span>Orders</span>
          </div>
          <div className="flex items-center justify-end gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">25.5%</div>
            <span>Visits</span>
          </div>
        </div>
        <div className="mt-4 flex overflow-hidden rounded-lg">
          <span className="h-4 bg-primary" style={{ width: "70%" }}></span>
          <span className="h-4 bg-indigo-500" style={{ width: "30%" }}></span>
        </div>
      </CardContent>
    </Card>
  );
}
