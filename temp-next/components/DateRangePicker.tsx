"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DateRangePicker({
  onChange,
}: {
  onChange: (range: DateRange | undefined) => void;
}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const handleSelect = (selected: DateRange | undefined) => {
    setRange(selected);
    onChange(selected);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow w-fit">
      <h3 className="text-sm font-semibold mb-2">📅 Select Date Range</h3>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        numberOfMonths={2}
        className="text-sm"
      />
      <p className="mt-2 text-xs text-zinc-500">
        {range?.from && range?.to
          ? `Showing results from ${format(range.from, "PPP")} to ${format(
              range.to,
              "PPP"
            )}`
          : "Please select a date range"}
      </p>
    </div>
  );
}
