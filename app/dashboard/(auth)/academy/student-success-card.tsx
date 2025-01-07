import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpIcon, ArrowDownIcon, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudentSuccessCardProps {
  currentSuccessRate: number;
  previousSuccessRate: number;
  totalStudents: number;
  passingStudents: number;
}

export default function StudentSuccessCard({
  currentSuccessRate = 86,
  previousSuccessRate = 82,
  totalStudents = 1250,
  passingStudents = 1075
}: StudentSuccessCardProps) {
  const successRateChange = currentSuccessRate - previousSuccessRate;
  const isPositiveChange = successRateChange >= 0;
  const passingPercentage = (passingStudents / totalStudents) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Overall Success Rate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold">{currentSuccessRate}%</span>
          <div
            className={`flex items-center ${isPositiveChange ? "text-green-600" : "text-red-600"}`}>
            {isPositiveChange ? (
              <ArrowUpIcon className="mr-1 h-5 w-5" />
            ) : (
              <ArrowDownIcon className="mr-1 h-5 w-5" />
            )}
            <span className="font-medium">{Math.abs(successRateChange)}%</span>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={currentSuccessRate} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Previous: {previousSuccessRate}%</span>
            <span>Target: 100%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-500" />
            <span className="font-medium">Total Students</span>
          </div>
          <span className="font-bold">{totalStudents}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              <span className="font-medium">Passing Students</span>
            </div>
            <span className="font-bold">{passingStudents}</span>
          </div>
          <Progress value={passingPercentage} className="h-2" />
          <div className="text-sm text-muted-foreground">
            {passingPercentage.toFixed(1)}% of total
          </div>
        </div>
        <Button variant="outline" className="mt-4 w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
