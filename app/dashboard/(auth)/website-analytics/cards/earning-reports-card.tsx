"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { AreaChartIcon, DollarSignIcon, HandCoinsIcon } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { day: "Mo", sales: 35 },
  { day: "Thu", sales: 30 },
  { day: "We", sales: 37 },
  { day: "Th", sales: 14 },
  { day: "Fr", sales: 20 },
  { day: "Sa", sales: 24 },
  { day: "Su", sales: 38 }
];

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--primary))"
  }
} satisfies ChartConfig;

export default function EarningReportsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Earning Reports</CardTitle>
        <CardDescription>Weekly Earnings Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="text-2xl font-bold lg:text-4xl">$1.468</div>
              <Badge variant="success">+4.2%</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              You informed of this week compared to last week
            </div>
          </div>
          <div className="col-span-2">
            <ChartContainer className="h-[150px] w-full" config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="sales" fill="var(--color-desktop)" radius={5} barSize={40} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
        <div className="mt-5 grid gap-10 lg:grid-cols-3 lg:rounded-lg lg:border lg:p-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <DollarSignIcon className="h-5 w-5" />
              </div>
              <span>Earnings</span>
            </div>
            <div className="text-xl font-bold">$545.69</div>
            <Progress className="h-1" value={70} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <AreaChartIcon className="h-5 w-5" />
              </div>
              <span>Profit</span>
            </div>
            <div className="text-xl font-bold">$256.34</div>
            <Progress className="h-1" value={70} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                <HandCoinsIcon className="h-5 w-5" />
              </div>
              <span>Expense</span>
            </div>
            <div className="text-xl font-bold">$74.19</div>
            <Progress className="h-1" value={70} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
