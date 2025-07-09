"use client";

import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Scatter,
  Bubble,
} from "react-chartjs-2";
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
  // BubbleDataPoint,
  // ScatterDataPoint,
} from "chart.js";


import {Chart as Charttype} from 'react-chartjs-2'


import {
  barLineData,
  pieDoughnutData,
  radarData,
  polarAreaData,
  scatterData,
  bubbleData,
  areaData,
  mixedData,
} from "@/data/sampleData";

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

type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "doughnut"
  | "radar"
  | "polarArea"
  | "scatter"
  | "bubble"
  | "area"
  | "mixed";

interface Props {
  type: ChartType;
}

export default function ChartDisplay({ type }: Props) {
  switch (type) {
    case "bar":
      return <Bar data={barLineData} />;
    case "line":
      return <Line data={barLineData} />;
    case "pie":
      return <Pie data={pieDoughnutData} />;
    case "doughnut":
      return <Doughnut data={pieDoughnutData} />;
    case "radar":
      return <Radar data={radarData} />;
    case "polarArea":
      return <PolarArea data={polarAreaData} />;
    case "scatter":
      return <Scatter data={scatterData} />;
    case "bubble":
      return <Bubble data={bubbleData} />;
    case "area":
      return (
        <Line
          data={areaData}
          options={{ plugins: { legend: { display: true } }, responsive: true }}
        />
      );
    case "mixed":
      return (
        <Charttype
          type="bar"
          data={mixedData}
          options={{
            responsive: true,
            plugins: { legend: { display: true } },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Profits",
                },
              },
              y1: {
                beginAtZero: true,
                position: "right",
                grid: {
                  drawOnChartArea: false,
                },
                title: {
                  display: true,
                  text: "Growth (%)",
                },
              },
            },
          }}
        />
      );
    default:
      return null;
  }
}
