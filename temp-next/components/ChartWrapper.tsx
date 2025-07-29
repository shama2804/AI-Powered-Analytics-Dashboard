"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample pie data (static, but can be made dynamic too)
const pieData = [
  { name: "Email", value: 400 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 300 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

type Props = {
  data: { name: string; value: number; users: number }[];
};

export default function ChartWrapper({ data }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 w-full">
      {/* Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Revenue Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Users Acquired</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

{/* Pie Chart */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md"
>
  <h3 className="text-lg font-semibold mb-2">Traffic Sources</h3>
  <ResponsiveContainer width="100%" height={280}>
  <PieChart>
    <Pie
      data={pieData}
      cx="50%"
      cy="50%"
      outerRadius={100} // Bigger size
      dataKey="value"
      label
    >
      {pieData.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>

</motion.div>

    </div>
  );
}
