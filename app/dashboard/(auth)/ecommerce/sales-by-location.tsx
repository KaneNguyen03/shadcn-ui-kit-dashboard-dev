import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExportButton } from "@/components/CardActionMenus";

export function EcommerceSalesByLocationCard() {
  return (
    <Card className="md:col-span-4 lg:col-span-6 xl:col-span-4">
      <CardHeader className="relative">
        <CardTitle className="font-semibold">
          Sales by Location
          <ExportButton />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <div className="mb-2 flex justify-between">
              <span>Canada</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="mb-2 flex justify-between">
              <span>Greenland</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="mb-2 flex justify-between">
              <span>Russia</span>
              <span>63%</span>
            </div>
            <Progress value={63} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="mb-2 flex justify-between">
              <span>China</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="mb-2 flex justify-between">
              <span>Australia</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
