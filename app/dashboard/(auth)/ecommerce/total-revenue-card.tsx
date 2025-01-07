"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { ExportButton } from "@/components/CardActionMenus";
import { Bar, BarChart, XAxis } from "recharts";

export function EcommerceTotalRevenueCard() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))"
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))"
    }
  } satisfies ChartConfig;

  const chartData = [
    { month: "January", desktop: 190, mobile: 180 },
    { month: "February", desktop: 250, mobile: 200 },
    { month: "March", desktop: 240, mobile: 120 },
    { month: "April", desktop: 120, mobile: 190 },
    { month: "May", desktop: 110, mobile: 130 },
    { month: "June", desktop: 250, mobile: 140 }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between text-base font-normal">
          Total Revenue
          <ExportButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
          <div className="flex gap-8 rounded-lg border p-4">
            <button className="flex flex-1 flex-col justify-center gap-1 text-left">
              <span className="text-xs text-muted-foreground">Desktop</span>
              <span className="text-lg font-bold leading-none sm:text-2xl">24,828</span>
            </button>
            <button className="flex flex-1 flex-col justify-center gap-1 text-left">
              <span className="text-xs text-muted-foreground">Mobile</span>
              <span className="text-lg font-bold leading-none sm:text-2xl">25,010</span>
            </button>
          </div>
        </div>
        <div className="pt-8">
          <ChartContainer className="h-[200px] w-full" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
