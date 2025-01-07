import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WelcomeCard() {
  return (
    <Card className="relative overflow-hidden md:col-span-12 xl:col-span-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Congratulations John! 🎉</CardTitle>
        <CardDescription>Best seller of the month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 mt-4 text-2xl font-bold">$15,231.89</div>
        <Button>View Sales</Button>
      </CardContent>
      <img
        src={`${process.env.DASHBOARD_BASE_URL}/images/star-shape.png`}
        className="pointer-events-none absolute inset-0"
        alt="..."
      />
    </Card>
  );
}
