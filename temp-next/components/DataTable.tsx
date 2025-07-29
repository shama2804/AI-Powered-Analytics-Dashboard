"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { useState } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";

type Campaign = {
  campaign: string;
  impressions: number;
  clicks: number;
  conversions: number;
  date: string;
};

const columns: ColumnDef<Campaign>[] = [
  { accessorKey: "campaign", header: "Campaign" },
  { accessorKey: "impressions", header: "Impressions" },
  { accessorKey: "clicks", header: "Clicks" },
  { accessorKey: "conversions", header: "Conversions" },
  { accessorKey: "date", header: "Date" },
];

export default function DataTable({ data }: { data: Campaign[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // ✅ CSV Export Handler
  const handleExport = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "campaign_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10"
    >
      {/* Header & Export */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold">📋 Campaign Performance</h2>
        <Button variant="outline" size="sm" onClick={handleExport}>
          Export
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-zinc-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 font-medium text-zinc-700 dark:text-zinc-100 whitespace-nowrap"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-sm text-zinc-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
