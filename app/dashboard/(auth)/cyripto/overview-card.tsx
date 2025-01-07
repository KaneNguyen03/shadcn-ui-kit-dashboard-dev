import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverviewCard() {
  return (
    <Card className="lg:col-span-12 xl:col-span-2">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Available balance in USD</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="text-3xl font-bold">$179,850.950</div>
        <div className="mt-4 grid gap-4 lg:mt-8 lg:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-lg bg-muted px-4 py-3">
            <span>Wallets</span>
            <span className="text-2xl font-semibold">10</span>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-muted px-4 py-3">
            <span>Transactions</span>
            <span className="text-2xl font-semibold">34,405</span>
          </div>
        </div>
        <div className="text-sm italic text-muted-foreground">Last activity at 19 Nov, 2025</div>
      </CardContent>
    </Card>
  );
}
