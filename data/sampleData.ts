export const barLineData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [120, 190, 300, 500, 200],
      backgroundColor: "rgba(99, 102, 241, 0.6)",
      borderColor: "rgba(79, 70, 229, 1)",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    },
    {
      label: "Revenue",
      data: [150, 220, 320, 480, 260],
      backgroundColor: "rgba(16, 185, 129, 0.6)",
      borderColor: "rgba(5, 150, 105, 1)",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    },
    {
      label: "Expenses",
      data: [100, 160, 250, 400, 180],
      backgroundColor: "rgba(251, 191, 36, 0.6)",
      borderColor: "rgba(202, 138, 4, 1)",
      borderWidth: 2,
      tension: 0.4,
      fill: true,
    },
  ],
};

export const pieDoughnutData = {
  labels: ["Electronics", "Fashion", "Groceries", "Books", "Toys"],
  datasets: [
    {
      label: "2023",
      data: [300, 150, 100, 80, 70],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
      borderWidth: 1,
    },
    {
      label: "2024",
      data: [280, 170, 130, 90, 85],
      backgroundColor: ["#2563eb", "#059669", "#d97706", "#dc2626", "#7c3aed"],
      borderWidth: 1,
    },
  ],
};

export const radarData = {
  labels: ["Design", "Development", "Testing", "Deployment", "Maintenance"],
  datasets: [
    {
      label: "Team Alpha",
      data: [80, 85, 75, 70, 65],
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "#3b82f6",
      pointBackgroundColor: "#3b82f6",
    },
    {
      label: "Team Beta",
      data: [60, 70, 85, 90, 95],
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      borderColor: "#10b981",
      pointBackgroundColor: "#10b981",
    },
    {
      label: "Team Gamma",
      data: [70, 60, 80, 75, 85],
      backgroundColor: "rgba(245, 158, 11, 0.2)",
      borderColor: "#f59e0b",
      pointBackgroundColor: "#f59e0b",
    },
  ],
};

export const polarAreaData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "2023",
      data: [11, 16, 7, 14, 6],
      backgroundColor: ["#ef4444", "#3b82f6", "#facc15", "#22c55e", "#a855f7"],
    },
    {
      label: "2024",
      data: [13, 14, 9, 12, 10],
      backgroundColor: ["#dc2626", "#2563eb", "#eab308", "#16a34a", "#7c3aed"],
    },
  ],
};

export const scatterData = {
  datasets: [
    {
      label: "Product A",
      data: [
        { x: -10, y: 0 },
        { x: 0, y: 10 },
        { x: 10, y: 5 },
      ],
      backgroundColor: "#f97316",
    },
    {
      label: "Product B",
      data: [
        { x: 5, y: 8 },
        { x: 2, y: 12 },
        { x: -2, y: 6 },
      ],
      backgroundColor: "#6366f1",
    },
    {
      label: "Product C",
      data: [
        { x: -4, y: 4 },
        { x: 4, y: -4 },
        { x: 6, y: 10 },
      ],
      backgroundColor: "#10b981",
    },
  ],
};

export const bubbleData = {
  datasets: [
    {
      label: "Startup A",
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 10, y: 15, r: 10 },
      ],
      backgroundColor: "rgba(139, 92, 246, 0.6)",
    },
    {
      label: "Startup B",
      data: [
        { x: 25, y: 20, r: 12 },
        { x: 15, y: 25, r: 18 },
      ],
      backgroundColor: "rgba(251, 191, 36, 0.6)",
    },
    {
      label: "Startup C",
      data: [
        { x: 18, y: 10, r: 10 },
        { x: 12, y: 18, r: 14 },
      ],
      backgroundColor: "rgba(16, 185, 129, 0.6)",
    },
  ],
};

export const areaData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Revenue 2023",
      data: [4000, 5500, 6000, 7500],
      borderColor: "#14b8a6",
      backgroundColor: "rgba(20, 184, 166, 0.3)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Revenue 2024",
      data: [4200, 5800, 6500, 8000],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export const mixedData = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      type: "bar" as const,
      label: "Profits",
      data: [300, 400, 500, 700, 800],
      backgroundColor: "rgba(59, 130, 246, 0.6)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
    },
    {
      type: "line" as const,
      label: "Growth",
      data: [3, 4.2, 5.1, 6.3, 7.2],
      borderColor: "rgba(16, 185, 129, 1)",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      borderWidth: 2,
      fill: true,
      yAxisID: "y1", // for dual-axis if needed
    },
  ],
};
