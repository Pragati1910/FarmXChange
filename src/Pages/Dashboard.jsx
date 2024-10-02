import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import './Dashboard.css'; // Custom styling including color scheme and font

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate(); // useNavigate for handling navigation

  // Chart Data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sales Over Time",
        data: [3, 2, 2, 6, 7, 8, 9, 10, 6, 5],
        fill: false,
        backgroundColor: "#EDF4DF", 
        borderColor: "#EDF4DF", 
        pointBackgroundColor: "#EDF4DF", 
      },
    ],
  };

  const barChartData = {
    labels: ["Tomatoes", "Potatoes", "Bananas", "Carrots", "Apples", "Cucumbers"],
    datasets: [
      {
        label: "Top Products Distribution",
        data: [120, 150, 130, 90, 110, 80],
        backgroundColor: ["#95CF24", "#ADB8A6", "#EDF4DF", "#ADB8A6", "#95CF24", "#ADB8A6"], 
        borderColor: ["#95CF24", "#ADB8A6", "#EDF4DF", "#0B2611", "#95CF24", "#ADB8A6"],
        borderWidth: 1,
      },
    ],
  };

  const transactionData = [
    { sno: 1, date: "2024-09-30", timestamp: "12:30 PM", entryExit: "Entry", description: "Tomatoes arrived in godown", authorizedBy: "Manager A", amount: "+500" },
    { sno: 2, date: "2024-09-30", timestamp: "03:45 PM", entryExit: "Exit", description: "Bananas exited godown", authorizedBy: "Manager B", amount: "-200" },
    { sno: 3, date: "2024-09-29", timestamp: "10:00 AM", entryExit: "Entry", description: "Apples arrived in godown", authorizedBy: "Manager C", amount: "+300" },
    { sno: 4, date: "2024-09-29", timestamp: "02:15 PM", entryExit: "Exit", description: "Cucumbers exited godown", authorizedBy: "Manager D", amount: "-150" },
  ];

  // Navigation handlers
  const goToPickupPage = () => {
    navigate("/pickup");
  };

  return (
    <div className="p-8 min-h-screen dashboard-container">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="mb-6">
        <Button 
          variant="contained" 
          sx={{ backgroundColor: "#0B2611", '&:hover': { backgroundColor: "#95CF24" }, marginRight: 2 }} // Dark green color
          onClick={goToPickupPage}
        >
          Go to Pickup Page
        </Button>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: "#95CF24", '&:hover': { backgroundColor: "#0B2611" } }} // Dark green color
          onClick={() => navigate("/inventory")}
        >
          Go to Inventory Page
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="p-6 rounded-lg shadow bg-dark-green">
          <h2 className="text-lg font-semibold mb-4 text-white">Sales Over Time</h2>
          <Line data={lineChartData} />
        </div>

        {/* Bar Chart */}
        <div className="p-6 rounded-lg shadow bg-dark-green">
          <h2 className="text-lg font-semibold mb-4 text-white">Top Products Distribution</h2>
          <Bar data={barChartData} />
        </div>
      </div>

      {/* Transaction Table */}
      <div className="p-6 rounded-lg shadow bg-dark-green mt-8">
        <h2 className="text-lg font-semibold mb-4 text-white">Transaction Details</h2>
        <table className="min-w-full table-auto text-white">
          <thead>
            <tr className="bg-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">S.No</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Timestamp</th>
              <th className="py-3 px-6 text-left">Entry/Exit</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Authorized By</th>
              <th className="py-3 px-6 text-left">Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-400 hover:bg-gray-500">
                <td className="py-3 px-6 text-left">{transaction.sno}</td>
                <td className="py-3 px-6 text-left">{transaction.date}</td>
                <td className="py-3 px-6 text-left">{transaction.timestamp}</td>
                <td className="py-3 px-6 text-left">{transaction.entryExit}</td>
                <td className="py-3 px-6 text-left">{transaction.description}</td>
                <td className="py-3 px-6 text-left">{transaction.authorizedBy}</td>
                <td className={`py-3 px-6 text-left font-bold ${transaction.amount.startsWith("+") ? "text-green" : "text-red"}`}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
