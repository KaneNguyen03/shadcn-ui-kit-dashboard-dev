"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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

export const description = "A donut chart";

const chartData = [
  { browser: "active", visitors: 30, fill: "var(--color-active)" },
  { browser: "new", visitors: 20, fill: "var(--color-new)" },
  { browser: "completed", visitors: 50, fill: "var(--color-completed)" }
];

const chartConfig = {
  active: {
    label: "Active",
    color: "hsl(var(--chart-1))"
  },
  new: {
    label: "New",
    color: "hsl(var(--chart-2))"
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-3))"
  }
} satisfies ChartConfig;

export default function ProjectEfficiency() {
  return (
    <Card className="flex flex-col xl:col-span-1">
      <CardHeader className="items-center">
        <CardTitle className="text-xl">Project Efficiency</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex-1 flex-shrink-0">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    formatter={(value, name, props) => (
                      <div className="flex justify-between gap-2">
                        <span className="capitalize">{name}</span> %{value}
                      </div>
                    )}
                  />
                }
              />
              <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} />
              <ChartLegend content={<ChartLegendContent className="sss" nameKey="browser" />} />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
