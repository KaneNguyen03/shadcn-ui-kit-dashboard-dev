"use client";

import { TrendingUp, Users2Icon, WalletMinimal } from "lucide-react";
import { Line, LineChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 }
];

const chartConfig = {
  desktop: {
    label: "Customer",
    color: "hsl(var(--primary))"
  }
} satisfies ChartConfig;

export function TotalRevenueCard() {
  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-2 pt-6">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
            <WalletMinimal className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-2">
            <div>Total Revenue</div>
            <h4 className="text-2xl font-bold">$56,562</h4>
            <div className="flex flex-col text-sm text-muted-foreground">
              <span className="font-bold text-green-500">+24.2%</span>
              <span className="flex items-center">
                from last month
                <TrendingUp className="ms-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <ChartContainer className="h-[50px] w-full" config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0
              }}>
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
