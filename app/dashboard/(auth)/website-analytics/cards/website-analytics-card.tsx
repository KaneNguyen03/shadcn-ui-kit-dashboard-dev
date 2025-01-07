import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WebsiteAnalyticsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Website Analytics</CardTitle>
        <CardDescription>Total 28.5% Conversion Rate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">432</div>
            <span>Direct</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">216</div>
            <span>Organic</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">29%</div>
            <span>Sessions</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">2.3K</div>
            <span>Page Views</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">1.6K</div>
            <span>Leads</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-12 rounded-lg bg-muted px-2 py-1 text-center">8%</div>
            <span>Conversions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
