"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MetricCard } from "@/components/Card";
import ChartWrapper from "@/components/ChartWrapper";
import DataTable from "@/components/DataTable";
import DateRangePicker from "@/components/DateRangePicker";
import ThemeToggle from "@/components/ThemeToggle";

import metricsData from "@/data/metrics.json";
import campaignData from "@/data/campaign.json";

// --------------------
// Types
// --------------------
type Trend = "up" | "down";

type Metric = {
  title: string;
  value: string;
  change: string;
  trend: Trend;
};

type Campaign = {
  campaign: string;
  impressions: number;
  clicks: number;
  conversions: number;
  date: string; // ISO format string
};

type DateRange = {
  from?: Date;
  to?: Date;
};

// --------------------
// Data
// --------------------
const metrics = metricsData as Metric[];
const allCampaigns = campaignData as Campaign[];

// --------------------
// Page Component
// --------------------
export default function Home() {
  const [filteredData, setFilteredData] = useState<Campaign[]>(allCampaigns);

  const handleDateChange = (range: DateRange | undefined) => {
    if (!range?.from || !range?.to) {
      setFilteredData(allCampaigns);
      return;
    }

    const filtered = allCampaigns.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= range.from! && itemDate <= range.to!;
    });

    setFilteredData(filtered);
  };

  return (
    <main className="p-6 space-y-6">
      {/* Top Header */}
      <div className="text-center mb-8">
  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-[Inter]">
    <span className="text-indigo-600">AD</span><span className="text-pink-600">my</span><span className="text-black dark:text-white">BRAND</span> <span className="text-zinc-500">Dashboard</span>
  </h1>
  <div className="mt-4 flex justify-center">
    <ThemeToggle />
  </div>
</div>



{/* Metric Cards */}
<section className="flex justify-center">
  <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
    {metrics.map((metric) => (
      <MetricCard
        key={metric.title}
        title={metric.title}
        value={metric.value}
        change={metric.change}
        trend={metric.trend}
      />
    ))}
  </div>
</section>

      {/* Charts Section */}
      <section>
        <ChartWrapper
          data={filteredData.map((item) => ({
            name: item.campaign,
            value: item.impressions,
            users: item.clicks,
          }))}
        />
      </section>

      {/* Date Filter + Campaign Table */}
      <section className="space-y-4">
        {/* ✅ Animated DateRangePicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
        >
          <DateRangePicker onChange={handleDateChange} />
        </motion.div>

        <DataTable data={filteredData} />
      </section>
    </main>
  );
}
