import React from 'react';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: "Withdrawals",
      data: [300, 400, 200, 480, 300, 450, 400],
      backgroundColor: "#232323",
      borderRadius: 12,
      borderSkipped: 'false',
      barPercentage: 0.56,
      categoryPercentage: 0.6,
    },
    {
      label: "Deposits",
      data: [200, 300, 150, 400, 250, 350, 300],
      backgroundColor: "#396AFF",
      borderRadius: 12,
      borderSkipped: 'false',
      barPercentage: 0.56,
      categoryPercentage: 0.6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      space: 10,
      labels: {
        color: '#718EBF',
        padding: 20,
        font: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 20,
        boxHeight: 10,
        textAlign: 'right'
      },
    },
    datalabels: {
      display: false, // Disables labels directly on the data points
    },
  },
  layout: {
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 13,
          family: 'Inter, sans-serif',
        },
      },
    },
    y: {
      grid: {
        color: '#F3F3F5',
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 13,
          family: 'Inter, sans-serif',
        },
      },
      beginAtZero: true,
    },
  },
};

function WeeklyActivity() {

  return (
    <>
      <h2 className="text-[22px] text-customBlack font-semibold font-inter mb-4">Weekly Activity</h2>
      <div className="w-[730px] h-[322px] p-4 bg-white rounded-3xl">
        <Bar data={data} options={options}
          width={730}
          height={229}
        />
      </div>
    </>
  )
}

export default WeeklyActivity