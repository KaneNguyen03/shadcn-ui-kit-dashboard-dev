import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function EcommerceCustomerReviewsCard() {
  return (
    <Card className="md:col-span-4 lg:col-span-12 xl:col-span-4">
      <CardHeader>
        <CardTitle className="font-semibold">Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 pt-4">
        <div className="flex justify-between rounded-lg bg-muted p-4">
          <div className="flex items-center gap-2 *:size-5">
            <Star stroke="orange" fill="orange" />
            <Star stroke="orange" fill="orange" />
            <Star stroke="orange" fill="orange" />
            <Star stroke="orange" fill="orange" />
            <Star stroke="orange" />
          </div>
          <span>4.5 out of 5</span>
        </div>
        <div className="text-center text-muted-foreground">Total 5.50k reviews</div>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0">5 star</span>
            <Progress value={70} color="bg-green-500" className="h-2" />
            <span>70%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0">4 star</span>
            <Progress value={67} color="bg-lime-500" className="h-2" />
            <span>67%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0">3 star</span>
            <Progress value={50} color="bg-orange-500" className="h-2" />
            <span>50%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0">2 star</span>
            <Progress value={42} color="bg-pink-500" className="h-2" />
            <span>42%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0">1 star</span>
            <Progress value={20} color="bg-rose-500" className="h-2" />
            <span>20%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
