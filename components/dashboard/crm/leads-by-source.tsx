"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { CardOptionsMenu } from "@/components/CardActionMenus";

const chartData = [
  { source: "social", leads: 275, fill: "var(--color-social)" },
  { source: "email", leads: 200, fill: "var(--color-email)" },
  { source: "call", leads: 287, fill: "var(--color-call)" },
  { source: "others", leads: 173, fill: "var(--color-others)" }
];

const chartConfig = {
  social: {
    label: "Social",
    color: "hsl(var(--chart-1))"
  },
  email: {
    label: "Email",
    color: "hsl(var(--chart-2))"
  },
  call: {
    label: "Call",
    color: "hsl(var(--chart-3))"
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-4))"
  }
} satisfies ChartConfig;

type ChartConfigKeys = keyof typeof chartConfig;

export function LeadBySourceCard() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.leads, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Leads by Source</CardTitle>
        <CardOptionsMenu />
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="leads" nameKey="source" innerRadius={60} strokeWidth={5}>
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
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground">
                          Leads
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex justify-around">
          {chartData.map((item) => (
            <div className="flex flex-col" key={item.source}>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: chartConfig[item.source as ChartConfigKeys]?.color
                  }}></span>
                <div>{chartConfig[item.source as ChartConfigKeys]?.label}</div>
              </div>
              <div className="text-xl font-bold">{item.leads}</div>
            </div>
          ))}
          <div></div>
        </div>
      </CardContent>
    </Card>
  );
}
