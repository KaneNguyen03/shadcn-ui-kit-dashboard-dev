import { Download, Folder, MoreVertical, Share2, Star, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { StarFilledIcon } from "@radix-ui/react-icons";

interface Folder {
  id: string;
  name: string;
  items: number;
  starred: boolean;
  lastModified: string;
}

const folders: Folder[] = [
  { id: "1", name: "Documents", items: 120, starred: true, lastModified: "10 days ago" },
  { id: "2", name: "Images", items: 250, starred: false, lastModified: "2 days ago" },
  { id: "3", name: "Projects", items: 45, starred: true, lastModified: "Today" },
  { id: "4", name: "Downloads", items: 80, starred: false, lastModified: "Yesterday" }
];

export function FolderListCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {folders.map((folder) => (
        <Card key={folder.id} className="transition-colors hover:bg-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-3">
              <Folder className="h-4 w-4 text-yellow-500" />
              <h3 className="font-semibold leading-none tracking-tight">{folder.name}</h3>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{folder.items} items</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">{folder.lastModified}</p>
            <Button variant="ghost" size="icon">
              {folder.starred ? (
                <StarFilledIcon className="size-4 text-orange-400" />
              ) : (
                <Star className="size-4 text-muted-foreground" />
              )}

              <span className="sr-only">{folder.starred ? "Unstar" : "Star"} folder</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
