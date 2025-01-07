import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LeaderboardCard() {
  const topStudents = [
    { id: 1, name: "Liam Smith", points: 5000, avatar: "1.png" },
    { id: 2, name: "Emma Brown", points: 4800, avatar: "2.png" },
    { id: 3, name: "Noah Johnson", points: 4600, avatar: "3.png" },
    { id: 4, name: "Olivia Davis", points: 4400, avatar: "4.png" }
  ];

  return (
    <Card className="lg:col-span-6 xl:col-span-3">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Leaderboard</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-4">
          {topStudents.map((student, index) => (
            <li key={student.id} className="flex items-center space-x-4">
              <span className="font-bold">{index + 1}.</span>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={`${process.env.DASHBOARD_BASE_URL}/images/avatars/${student.avatar}`}
                  alt={student.name}
                />
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1 font-medium">{student.name}</span>
              <Badge variant="secondary">{student.points} pts</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
