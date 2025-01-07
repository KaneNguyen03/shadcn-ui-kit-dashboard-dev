"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type Order = {
  id: number;
  customer: {
    name?: string;
    image?: string;
  };
  product: {
    name: string;
  };
  amount: number;
  status: "paid" | "processing" | "success" | "failed";
};

const orders: Order[] = [
  {
    id: 1023,
    customer: {
      name: "Theodore Bell",
      image: "/images/avatars/1.png"
    },
    product: {
      name: "Tire Doodad"
    },
    amount: 300,
    status: "processing"
  },
  {
    id: 2045,
    customer: {
      name: "Amelia Grant",
      image: "/images/avatars/2.png"
    },
    product: {
      name: "Engine Kit"
    },
    amount: 450,
    status: "paid"
  },
  {
    id: 3067,
    customer: {
      name: "Eleanor Ward",
      image: "/images/avatars/3.png"
    },
    product: {
      name: "Brake Pad"
    },
    amount: 200,
    status: "success"
  },
  {
    id: 4089,
    customer: {
      name: "Henry Carter",
      image: "/images/avatars/4.png"
    },
    product: {
      name: "Fuel Pump"
    },
    amount: 500,
    status: "processing"
  },
  {
    id: 5102,
    customer: {
      name: "Olivia Harris",
      image: "/images/avatars/5.png"
    },
    product: {
      name: "Steering Wheel"
    },
    amount: 350,
    status: "failed"
  },
  {
    id: 6123,
    customer: {
      name: "James Robinson",
      image: "/images/avatars/6.png"
    },
    product: {
      name: "Air Filter"
    },
    amount: 180,
    status: "paid"
  },
  {
    id: 7145,
    customer: {
      name: "Sophia Martinez",
      image: "/images/avatars/7.png"
    },
    product: {
      name: "Oil Filter"
    },
    amount: 220,
    status: "success"
  },
  {
    id: 8167,
    customer: {
      name: "Liam Thompson",
      image: "/images/avatars/8.png"
    },
    product: {
      name: "Radiator Cap"
    },
    amount: 290,
    status: "processing"
  }
];

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <span>#{row.getValue("id")}</span>
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          className="h-10 w-10 rounded-full border"
          src={`${process.env.DASHBOARD_BASE_URL}${row.original.customer["image"]}`}
        />
        <div className="capitalize">{row.original.customer.name}</div>
      </div>
    )
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => <div className="capitalize">{row.original.product.name}</div>
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(order.id))}>
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

export function EcommerceRecentOrdersCard() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5
  });

  const table = useReactTable({
    data: orders,
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
      rowSelection,
      pagination
    }
  });

  return (
    <Card className="lg:col-span-7">
      <CardHeader className="relative">
        <CardTitle className="font-semibold">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setPagination((prev) => ({ ...prev, pageIndex: Math.max(prev.pageIndex - 1, 0) }))
          }
          disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
          disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
