import { generateMeta } from "@/lib/utils";
import StudentSuccessCard from "./student-success-card";
import LearningPathCard from "./learning-path-card";
import { MostActivityCard } from "./most-activity";
import ProgressStatisticsCard from "./progress-statistics-card";
import LeaderboardCard from "./leader-board-card";
import CoursesListTable from "./courses-list";
import CourseProgressByMonth from "./course-progress-by-month";
import WelcomeCard from "./welcome-card";

export async function generateMetadata() {
  return generateMeta({
    title: "Academy",
    description:
      "The ecommerce dashboard template provides a detailed and user-friendly interface for monitoring sales, inventory, and customer data efficiently.",
    canonical: "/academy"
  });
}

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Academy</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-12">
        <WelcomeCard />
        <LearningPathCard />
        <LeaderboardCard />
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        <StudentSuccessCard
          currentSuccessRate={88}
          previousSuccessRate={85}
          totalStudents={1500}
          passingStudents={1320}
        />
        <ProgressStatisticsCard />
        <MostActivityCard />
      </div>
      <div className="mt-4 gap-4 space-y-4 xl:grid xl:grid-cols-2 xl:space-y-0">
        <CourseProgressByMonth />
        <CoursesListTable />
      </div>
    </div>
  );
}
