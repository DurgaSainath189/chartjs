"use client";

import { radarData } from "@/data/sampleData";
import {
    Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function FirstPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-950 text-white p-6">
      <div className="w-full max-w-4xl backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 animate-fadeIn">
        <Radar data={radarData} />
      </div>

    </main>
  );
}
