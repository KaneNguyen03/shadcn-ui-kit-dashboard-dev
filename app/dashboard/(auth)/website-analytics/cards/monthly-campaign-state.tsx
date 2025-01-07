import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircleIcon, BanIcon, LinkIcon, MailIcon, MouseIcon, Users2Icon } from "lucide-react";

export default function MonthlyCampaignStateCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Monthly Campaign State</CardTitle>
        <CardDescription>8.52K Social Visitors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <MailIcon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Emails</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>12,346</span>
              <span className="text-green-600">0.3%</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <LinkIcon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Opened</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>8,734</span>
              <span className="text-green-600">2.1%</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <MouseIcon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Clicked</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>600</span>
              <span className="text-red-600">2.1%</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <Users2Icon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Subscribe</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>490</span>
              <span className="text-red-600">8.5%</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <AlertCircleIcon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Complaints</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>490</span>
              <span className="text-green-600">4.5%</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
              <BanIcon className="size-5" />
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Unsubscribe</p>
            </div>
            <div className="ml-auto space-x-3">
              <span>1.200</span>
              <span className="text-green-600">0.5%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
