import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarCheck2Icon, CalendarClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardOptionsMenu } from "@/components/CardActionMenus";

export default function ProgressStatisticsCard() {
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>Progress Statistics</CardTitle>
        <CardOptionsMenu />
      </CardHeader>
      <CardContent className="flex flex-col space-y-8 p-4">
        <div className="space-y-4 text-center">
          <div>Total activiy</div>
          <div className="text-4xl font-bold">70.5%</div>
        </div>
        <div className="grid w-full gap-8 lg:grid-cols-2">
          <div className="flex items-center gap-2">
            <Progress value={65} />
            <div className="text-sm text-muted-foreground">65%</div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={50} />
            <div className="text-sm text-muted-foreground">50%</div>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <CalendarClockIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-semibold">30</span>
              </div>
              <Badge variant="warning" className="h-auto px-4 py-2 text-sm">
                In Progress
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <CalendarCheck2Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-semibold">18</span>
              </div>
              <Badge variant="success" className="h-auto px-4 py-2 text-sm">
                Completed
              </Badge>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
