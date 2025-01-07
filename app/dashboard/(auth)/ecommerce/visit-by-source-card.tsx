"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExportButton } from "@/components/CardActionMenus";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";

export function EcommerceVisitBySourceCard() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" }
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors"
    },
    chrome: {
      label: "Direct",
      color: "hsl(var(--chart-1))"
    },
    safari: {
      label: "Social",
      color: "hsl(var(--chart-2))"
    },
    firefox: {
      label: "Email",
      color: "hsl(var(--chart-3))"
    },
    edge: {
      label: "Referrals",
      color: "hsl(var(--chart-4))"
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))"
    }
  } satisfies ChartConfig;

  return (
    <Card className="md:col-span-4 lg:col-span-6 xl:col-span-4">
      <CardHeader>
        <CardTitle className="font-semibold">
          Store Visits by Source
          <ExportButton />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[330px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold">
                          {/* {totalVisitors.toLocaleString()} */} 302
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground">
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
