"use client";

import { useState, useEffect } from "react";
import { format, subDays, subWeeks, subYears } from "date-fns";
import { CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const dateRangeOptions = [
  { value: "1w", label: "Last 1 week" },
  { value: "30d", label: "Last 30 days" },
  { value: "1y", label: "Last 1 year" }
];

export default function DateRangeSelectInput() {
  const [selectedRange, setSelectedRange] = useState("30d");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  useEffect(() => {
    const endDate = new Date();
    let startDate;

    switch (selectedRange) {
      case "1w":
        startDate = subWeeks(endDate, 1);
        break;
      case "30d":
        startDate = subDays(endDate, 30);
        break;
      case "1y":
        startDate = subYears(endDate, 1);
        break;
      default:
        startDate = subDays(endDate, 30);
    }

    setDateRange({
      start: format(startDate, "yyyy-MM-dd"),
      end: format(endDate, "yyyy-MM-dd")
    });
  }, [selectedRange]);

  return (
    <div className="mt-4 lg:mt-0 lg:w-52">
      <Select value={selectedRange} onValueChange={setSelectedRange}>
        <SelectTrigger className="w-full">
          <CalendarDays className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Select date range" />
        </SelectTrigger>
        <SelectContent>
          {dateRangeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
