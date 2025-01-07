"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExportButton } from "@/components/CardActionMenus";

const chartData = [
  { month: "January", received: 100, send: 180, withdraw: 290 },
  { month: "February", received: 305, send: 200, withdraw: 150 },
  { month: "March", received: 237, send: 120, withdraw: 180 },
  { month: "April", received: 73, send: 230, withdraw: 120 },
  { month: "May", received: 209, send: 130, withdraw: 125 },
  { month: "June", received: 214, send: 140, withdraw: 270 },
  { month: "July", received: 144, send: 170, withdraw: 240 }
];

const chartConfig = {
  received: {
    label: "Total Received",
    color: "hsl(var(--chart-1))"
  },
  send: {
    label: "Total Send",
    color: "hsl(var(--chart-2))"
  },
  withdraw: {
    label: "Total Withdraw",
    color: "hsl(var(--chart-3))"
  }
} satisfies ChartConfig;

export function BalanceSummeryChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex-row justify-between">
        <CardTitle>Balance Summary</CardTitle>
        <ExportButton />
      </CardHeader>
      <CardContent>
        <div className="mb-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-3 lg:max-w-screen-sm">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-3 w-3 rounded-lg bg-[hsl(var(--chart-1))]"></span>
              <span>{chartConfig.received.label}</span>
            </div>
            <div className="text-xl">2.010550 BTC</div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-3 w-3 rounded-lg bg-[hsl(var(--chart-2))]"></span>
              <span>{chartConfig.send.label}</span>
            </div>
            <div className="text-xl">2.010550 BTC</div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-3 w-3 rounded-lg bg-[hsl(var(--chart-3))]"></span>
              <span>{chartConfig.withdraw.label}</span>
            </div>
            <div className="text-xl">2.010550 BTC</div>
          </div>
        </div>
        <ChartContainer className="w-full lg:h-[320px]" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="received"
              type="monotone"
              stroke="var(--color-received)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="send"
              type="monotone"
              stroke="var(--color-send)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="withdraw"
              type="monotone"
              stroke="var(--color-withdraw)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
