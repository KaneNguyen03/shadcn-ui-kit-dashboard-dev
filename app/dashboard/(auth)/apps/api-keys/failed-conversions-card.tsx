import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountAnimation from "@/components/ui/custom/count-animation";
import { BanIcon } from "lucide-react";

export default function FailedConversionsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">Failed conversions</CardTitle>
        <BanIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold">
          <CountAnimation number={23} />
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-500">+5.02</span> % from last month
        </p>
      </CardContent>
    </Card>
  );
}
