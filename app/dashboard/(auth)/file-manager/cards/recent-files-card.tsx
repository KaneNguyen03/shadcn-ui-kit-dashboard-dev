"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  File,
  FileText,
  Image,
  Film,
  Music,
  Archive,
  Trash2,
  Download,
  Share2,
  ArrowRightIcon
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function getFileIcon(type: string) {
  switch (type) {
    case "image":
      return <Image className="h-4 w-4" />;
    case "video":
      return <Film className="h-4 w-4" />;
    case "audio":
      return <Music className="h-4 w-4" />;
    case "archive":
      return <Archive className="h-4 w-4" />;
    case "document":
      return <FileText className="h-4 w-4" />;
    default:
      return <File className="h-4 w-4" />;
  }
}

const files = [
  {
    id: 1,
    name: "project-proposal.docx",
    type: "document",
    size: 2500000,
    uploadDate: new Date(2024, 2, 15)
  },
  {
    id: 2,
    name: "company-logo.png",
    type: "image",
    size: 1200000,
    uploadDate: new Date(2024, 2, 14)
  },
  {
    id: 3,
    name: "presentation.pptx",
    type: "document",
    size: 5600000,
    uploadDate: new Date(2024, 2, 13)
  },
  { id: 4, name: "budget.xlsx", type: "document", size: 980000, uploadDate: new Date(2024, 2, 12) },
  {
    id: 5,
    name: "product-video.mp4",
    type: "video",
    size: 158000000,
    uploadDate: new Date(2024, 2, 11)
  }
];

export function RecentFilesCard() {
  const [fileList, setFileList] = useState(files);

  const deleteFile = (id: number) => {
    setFileList(fileList.filter((file) => file.id !== id));
  };

  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle className="text-base">Recently Uploaded Files</CardTitle>
        <div className="absolute end-4 top-3">
          <Button variant="ghost">
            View All <ArrowRightIcon className="ms-2 size-4" />
          </Button>
        </div>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="lg:w-[300px]">Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fileList.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  {getFileIcon(file.type)}
                  <span>{file.name}</span>
                </div>
              </TableCell>
              <TableCell>{formatFileSize(file.size)}</TableCell>
              <TableCell>{format(file.uploadDate, "MMM d, yyyy")}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      <span>Share</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => deleteFile(file.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
