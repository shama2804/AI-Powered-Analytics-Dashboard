// components/Card.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import clsx from "clsx";

type Trend = "up" | "down";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  trend: Trend;
};

export function MetricCard({ title, value, change, trend }: MetricCardProps) {
  const TrendIcon = trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className={clsx(
        "rounded-2xl p-5 shadow-md dark:shadow-none bg-white dark:bg-zinc-900 transition-colors border border-zinc-200 dark:border-zinc-800",
        "hover:shadow-lg",
        "flex flex-col items-center justify-center text-center h-40" // ✅ Center contents vertically & horizontally
      )}
    >
      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <div
        className={clsx(
          "mt-1 inline-flex items-center text-sm font-medium",
          trend === "up" ? "text-green-600" : "text-red-500"
        )}
      >
        <TrendIcon className="w-4 h-4 mr-1" />
        {change}
      </div>
    </motion.div>
  );
}
