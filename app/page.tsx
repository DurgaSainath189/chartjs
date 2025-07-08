"use client";

import ChartDisplay from "@/components/chartDisplay";
import { useState } from "react";

const chartTypes = [
  "bar",
  "line",
  "pie",
  "doughnut",
  "radar",
  "polarArea"
] as const;
type ChartType = (typeof chartTypes)[number];


export default function Home() {
  const [selectedChart, setSelectedChart] = useState<ChartType>("bar");

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#e0eafc] to-[#cfdef3] flex flex-col items-center justify-center px-4 py-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 drop-shadow-lg">
        Demo charts with sample data{" "}
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {chartTypes.map((chart) => (
          <button
            key={chart}
            onClick={() => setSelectedChart(chart)}
            className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 capitalize backdrop-blur-md border ${
              selectedChart === chart
                ? "bg-blue-600 text-white shadow-lg scale-105 border-blue-800"
                : "bg-white text-gray-700 hover:bg-blue-100 border-gray-300"
            }`}
          >
            {chart}
          </button>
        ))}
      </div>

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl transition-all duration-500">
        <ChartDisplay type={selectedChart as ChartType} />
      </div>
    </main>
  );
}
