"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChevronUpIcon, DollarSignIcon, HandCoinsIcon } from "lucide-react";
import { Bar, BarChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: "Total Revenue",
    color: "hsl(var(--chart-1))"
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

export default function TotalEarningCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Total Earning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center gap-3">
          <div className="text-2xl font-bold lg:text-4xl">83%</div>
          <div className="flex items-center text-green-500">
            <ChevronUpIcon className="me-1 h-4 w-4" /> 24.2%
          </div>
        </div>
        <ChartContainer className="w-full lg:h-[180px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
              barSize={40}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ChartContainer>
        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <HandCoinsIcon className="size-5" />
            </div>
            <div>
              <div>Total Revenue</div>
              <div className="text-sm text-muted-foreground">Client Payment</div>
            </div>
            <div className="ms-auto text-sm text-green-600">+$126</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <DollarSignIcon className="size-5" />
            </div>
            <div>
              <div>Total Sales</div>
              <div className="text-sm text-muted-foreground">Refund</div>
            </div>
            <div className="ms-auto text-sm text-green-600">+$98</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
