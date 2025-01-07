import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Flag from "react-world-flags";

export default function SalesbyCountriesCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Sales by Countries</CardTitle>
        <CardDescription>Monthly Sales Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <Flag code="US" className="h-10 w-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">United states</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-600">+27.4%</span> from last month
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="BR" className="h-10 w-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Brazil</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-600">+20.1%</span> from last month
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="IN" className="h-10 w-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">India</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-red-600">-5%</span> from last month
              </p>
            </div>
            <div className="ml-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="AU" className="h-10 w-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Australia</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-600">+10.9%</span> from last month
              </p>
            </div>
            <div className="ml-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center">
            <Flag code="FR" className="h-10 w-10 rounded-full object-cover" />
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">France</p>
              <p className="text-sm text-muted-foreground">
                <span className="text-green-600">+2.1%</span> from last month
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
