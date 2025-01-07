import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountAnimation from "@/components/ui/custom/count-animation";
import { Progress } from "@/components/ui/progress";
import { FileText, Image, Video, File } from "lucide-react";

interface FileTypeData {
  type: string;
  icon: React.ReactNode;
  count: number;
  size: string;
  color: string;
  usagePercentage: number;
}

const fileTypes: FileTypeData[] = [
  {
    type: "Documents",
    icon: <FileText className="h-6 w-6" />,
    count: 1390,
    size: "2.1 GB",
    color: "text-blue-500",
    usagePercentage: 35
  },
  {
    type: "Images",
    icon: <Image className="h-6 w-6" />,
    count: 5678,
    size: "3.8 GB",
    color: "text-green-500",
    usagePercentage: 62
  },
  {
    type: "Videos",
    icon: <Video className="h-6 w-6" />,
    count: 901,
    size: "7.5 GB",
    color: "text-red-500",
    usagePercentage: 89
  },
  {
    type: "Others",
    icon: <File className="h-6 w-6" />,
    count: 234,
    size: "1.2 GB",
    color: "text-yellow-500",
    usagePercentage: 28
  }
];

export function FileTypeStorageCards() {
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {fileTypes.map((fileType) => (
        <Card key={fileType.type}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{fileType.type}</CardTitle>
            <div className={fileType.color}>{fileType.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <CountAnimation number={fileType.count} />
            </div>
            <p className="text-xs text-muted-foreground">{fileType.size} used</p>
            <Progress value={fileType.usagePercentage} className="mt-2" />
            <p className="mt-1 text-xs text-muted-foreground">
              {fileType.usagePercentage}% of storage used
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
