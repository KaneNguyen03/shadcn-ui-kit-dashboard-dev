"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

const chartData = [
  { department: "cardiology", visitors: 275, fill: "var(--color-cardiology)" },
  { department: "neurology", visitors: 200, fill: "var(--color-neurology)" },
  { department: "oncology", visitors: 187, fill: "var(--color-oncology)" },
  { department: "pediatrics", visitors: 173, fill: "var(--color-pediatrics)" }
];

const chartConfig = {
  visitors: {
    label: "Visitors"
  },
  cardiology: {
    label: "Cardiology",
    color: "hsl(var(--chart-1))"
  },
  neurology: {
    label: "Neurology",
    color: "hsl(var(--chart-2))"
  },
  oncology: {
    label: "Oncology",
    color: "hsl(var(--chart-3))"
  },
  pediatrics: {
    label: "Pediatrics",
    color: "hsl(var(--chart-4))"
  }
} satisfies ChartConfig;

export function PatientsByDepartmentChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-0">
        <CardTitle>Patients by Department</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] pb-0 [&_.recharts-pie-label-text]:fill-foreground">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="department" />
            <ChartLegend
              content={<ChartLegendContent nameKey="department" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
