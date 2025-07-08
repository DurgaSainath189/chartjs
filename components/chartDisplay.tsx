'use client';

import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
} from 'react-chartjs-2';
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
} from 'chart.js';

import {
  barLineData,
  pieDoughnutData,
  radarData,
  polarAreaData,
} from '@/data/sampleData';

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
  Legend
);

type ChartType = 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea';

interface Props {
  type: ChartType;
}

export default function ChartDisplay({ type }: Props) {
  switch (type) {
    case 'bar':
      return <Bar data={barLineData} />;
    case 'line':
      return <Line data={barLineData} />;
    case 'pie':
      return <Pie data={pieDoughnutData} />;
    case 'doughnut':
      return <Doughnut data={pieDoughnutData} />;
    case 'radar':
      return <Radar data={radarData} />;
    case 'polarArea':
      return <PolarArea data={polarAreaData} />;
    default:
      return null;
  }
}
