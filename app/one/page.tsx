"use client";

import { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barLineData } from "@/data/sampleData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock modal chart data
const detailChartData = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      label: "Details",
      data: [20, 35, 15],
      backgroundColor: "#34d399",
    },
  ],
};

export default function FirstPage() {
  const chartRef = useRef<Chart<"bar">>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleBarClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const chart = chartRef.current;
    if (!chart) return;

    const elements = chart.getElementsAtEventForMode(
      event.nativeEvent,
      "nearest",
      { intersect: true },
      true
    );

    if (elements.length > 0) {
      const index = elements[0].index;
      const label = barLineData.labels?.[index] ?? "";
      setSelectedLabel(label);
      setShowModal(true);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gray-950 text-white p-6">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 animate-fadeIn">
        <Bar ref={chartRef} data={barLineData} onClick={handleBarClick} />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black rounded-xl p-6 max-w-lg w-full shadow-xl relative animate-fadeIn">
            <button
              className="absolute top-3 right-4 text-xl text-black hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Details for {selectedLabel}
            </h2>
            <Bar data={detailChartData} />
          </div>
        </div>
      )}
    </main>
  );
}
