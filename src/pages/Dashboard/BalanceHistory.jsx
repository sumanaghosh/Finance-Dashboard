import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);


function BalanceHistory() {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Monthly Data",
        data: [100, 200, 400, 800, 400, 200, 600],
        fill: true,
        borderColor: "#1814F3",
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Wait until chart is initialized
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#2D60FF40"); // Top color
          gradient.addColorStop(1, "#2D60FF00"); // Bottom color

          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        display: false, // Disables labels directly on the data points
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#DFE5EE",
        },
        ticks: {
          color: "#718EBF",
        },
        border: {
          dash: [6]
        }
      },
      y: {
        min: 0,
        max: 800,
        ticks: {
          stepSize: 200,
          color: '#718EBF'
        },
        grid: {
          display: true,
          color: "#DFE5EE",
        },
        border: {
          dash: [6]
        }
      },
    },
  };

  return (
    <>
      <h2 className="text-[22px] text-customBlack font-semibold font-inter mb-4">Balance History</h2>
      <div className='bg-white w-[635px] h-[276px] rounded-3xl'>
        <div className='w-[100%] h-[276px] p-3'>
          <Line data={data} options={options}
          />
        </div>

      </div>
    </>
  )
}

export default BalanceHistory;