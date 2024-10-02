import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,   // For category-based x-axis
  LinearScale,     // For linear scale on the y-axis
  BarElement,      // For bar chart elements
  Title,           // For the chart title
  Tooltip,         // For hover tooltips
  Legend           // For the legend
);

function MyChartComponent() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Function to render the chart
  const renderChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Destroy previous chart instance if it exists
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new ChartJS(ctx, {
      type: "bar", // Example chart type (Bar)
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [30, 45, 60, 40, 55, 70],
            backgroundColor: "#95CF24",
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  };

  useEffect(() => {
    renderChart();
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup on unmount
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}

export default MyChartComponent;
