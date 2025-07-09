"use client";

import { barLineData } from "@/data/sampleData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function FirstPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-950 text-white p-6">
      <div className="w-full max-w-4xl backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 animate-fadeIn">
        <Bar data={barLineData} />
      </div>

    </main>
  );
}
