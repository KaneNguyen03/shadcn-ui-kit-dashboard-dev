import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountAnimation from "@/components/ui/custom/count-animation";
import { CheckCheckIcon } from "lucide-react";

export default function SuccessfulConversionsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">Successful conversions</CardTitle>
        <CheckCheckIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold">
          <CountAnimation number={1204} />
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-500">+20.1%</span> from last month
        </p>
      </CardContent>
    </Card>
  );
}
