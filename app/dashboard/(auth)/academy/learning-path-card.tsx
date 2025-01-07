import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GitBranch } from "lucide-react";

export default function LearningPathCard() {
  const pathProgress = 40;
  const totalModules = 10;
  const completedModules = 4;

  return (
    <Card className="lg:col-span-6 xl:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Learning Path</CardTitle>
        <GitBranch className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="text-2xl font-bold">Full-Stack Developer</div>
        <Progress value={pathProgress} className="mt-2" />
        <p className="mt-2 text-xs text-muted-foreground">
          {completedModules} of {totalModules} modules completed
        </p>
        <Button className="mt-4 w-full" size="sm">
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
}
