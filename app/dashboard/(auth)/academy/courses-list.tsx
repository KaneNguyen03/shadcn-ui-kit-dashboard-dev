"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { MoreHorizontalIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const data: Course[] = [
  {
    id: 1,
    name: "Introduction to React",
    category: "Web Development",
    image: "react.svg",
    score: 4.5,
    progress: 60,
    started: true
  },
  {
    id: 2,
    name: "Machine Learning Basics",
    category: "Data Science",
    image: "angular.svg",
    score: 4.8,
    progress: 0,
    started: false
  },
  {
    id: 3,
    name: "Digital Marketing Fundamentals",
    category: "Marketing",
    image: "vue.svg",
    score: 4.2,
    progress: 45,
    started: true
  },
  {
    id: 4,
    name: "Python for Beginners",
    category: "Programming",
    image: "html.svg",
    score: 4.6,
    progress: 0,
    started: false
  },
  {
    id: 5,
    name: "UX Design Principles",
    category: "Design",
    image: "css.svg",
    score: 4.4,
    progress: 0,
    started: false
  }
];

export type Course = {
  id: number;
  name: string;
  category: string;
  image: string;
  score: number;
  progress: number;
  started: boolean;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: "Course name",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          className="h-12 w-12 rounded-lg border p-1"
          src={`${process.env.DASHBOARD_BASE_URL}/images/tech/${row.original.image}`}
        />
        <div className="capitalize">{row.getValue("name")}</div>
      </div>
    )
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => row.getValue("category")
  },
  {
    accessorKey: "score",
    header: "Score",
    cell: ({ row }) => (
      <div className="flex items-center">
        <StarIcon className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
        {row.getValue("score")}
      </div>
    )
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => <Progress className="h-2 w-20" value={row.getValue("progress")} />
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="text-end">
          {row.original.started ? (
            <Button size="sm">Continue Course</Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Start Course</DropdownMenuItem>
                <DropdownMenuItem>Add to Wishlist</DropdownMenuItem>
                <DropdownMenuItem>View Details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      );
    }
  }
];

export default function CoursesListTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <Card>
      <CardHeader className="flex-col items-start justify-between space-y-4 sm:flex-row sm:space-y-0">
        <CardTitle>Popular Courses</CardTitle>
        <Input
          placeholder="Filter courses"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="w-full sm:w-52"
        />
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 pt-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
