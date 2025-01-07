"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function StorageStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Storage Space Used</CardTitle>
        <CardDescription>See your remaining file storage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>1.8 GB used</span>
            <span>3 GB total</span>
          </div>
          <Progress value={70} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
