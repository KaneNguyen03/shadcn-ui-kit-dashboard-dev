import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function UpgradePlanCard() {
  return (
    <Card>
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">Developer Plan</CardTitle>
          <Button className="absolute end-4" variant="ghost" size="sm">
            Upgrade Plan
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Progress value={25} />
        <div className="text-sm text-muted-foreground">You used 215 of 2000 of your API</div>
      </CardContent>
    </Card>
  );
}
