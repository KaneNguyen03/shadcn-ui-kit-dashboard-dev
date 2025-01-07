"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import CalendarDateRangePicker from "@/components/date-range-picker";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 123, mobile: 95 },
  { month: "August", desktop: 298, mobile: 210 },
  { month: "September", desktop: 175, mobile: 150 },
  { month: "October", desktop: 290, mobile: 180 },
  { month: "November", desktop: 220, mobile: 160 },
  { month: "December", desktop: 310, mobile: 200 }
];

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

export function MonthlyFileTransferCard() {
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>Monthly File Transfer</CardTitle>
        <CardDescription>Number of files uploaded in the last 30 days</CardDescription>
        <div className="end-4 top-3 pt-4 lg:absolute lg:pt-0">
          <CalendarDateRangePicker />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
