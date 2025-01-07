"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon, MessageCircleReplyIcon, TicketIcon } from "lucide-react";

const chartData = [
  { browser: "new", tickets: 40, fill: "var(--color-new)" },
  { browser: "open", tickets: 25, fill: "var(--color-open)" }
];

const chartConfig = {
  new: {
    label: "New Tickets",
    color: "hsl(var(--chart-1))"
  },
  open: {
    label: "Open Tickets",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

export default function TicketsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Tickets</CardTitle>
        <CardDescription>Last 7 Days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-3">
              <div className="mb-5">
                <div className="mb-2 text-2xl font-bold lg:text-4xl">65</div>
                <div className="text-sm text-muted-foreground">Tickets</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <TicketIcon className="size-5" />
                </div>
                <div className="flex flex-1 flex-row justify-between lg:flex-col lg:justify-normal">
                  <div>New Tickets</div>
                  <div className="text-sm text-muted-foreground">40</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <ClockIcon className="size-5" />
                </div>
                <div className="flex flex-1 flex-row justify-between lg:flex-col lg:justify-normal">
                  <div>Open Tickets</div>
                  <div className="text-sm text-muted-foreground">25</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <MessageCircleReplyIcon className="size-5" />
                </div>
                <div className="flex flex-1 flex-row justify-between lg:flex-col lg:justify-normal">
                  <div>Response Time</div>
                  <div className="text-sm text-muted-foreground">1 Day</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square lg:max-h-[350px]">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={chartData}
                  dataKey="tickets"
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
                              88%
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground">
                              Completed
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
