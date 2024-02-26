"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
interface OverviewProps {
  data: any[];
}
const Overview = ({ data }: OverviewProps) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        ></XAxis>
        <YAxis
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={value => `$${value}`}
        ></YAxis>
        <Bar dataKey="total" fill="#3498db" radius={[4, 4, 0, 0]}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Overview;
