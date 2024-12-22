import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function ExpenseStatistics() {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
    datasets: [
      {
        data: [30, 15, 35, 20], // Corresponding percentages
        backgroundColor: [
          '#343C6A', // Color for Entertainment
          '#FC7900', // Color for Bill Expense
          '#232323', // Color for Others
          '#396AFF', // Color for Investment
        ],
        // borderColor: ['#fff'],
        borderWidth: 2,
        offset: [10,5,20,5],
      },
    ],
  };

  const options = {
    rotation: -(17 * Math.PI) / 1,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: '#fff', // Label text color
        font: {
          weight: '700',
          size: 16,
          family: 'Inter, sans-serif',
          align: 'center'
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}\n${label}%`;
        },
        align: 'center',
        anchor: 'left',
      },
      tooltip: {
        enabled: false, // Show tooltips when hovering
      },
    },
    layout: {
      padding: 20, // Padding around the chart
    },
  };

  return (
    <>
      <h2 className="text-base md:text-[22px] text-customBlack font-semibold font-inter mt-[16px] md:mt-[0] mb-[16px] md:mb-4">Expense Statistics</h2>
      <div className="w-full md:w-[350px] h-[240px] md:h-[322px] p-0 md:p-[1.5rem] bg-white rounded-[15px] md:rounded-3xl flex justify-center">
        <Pie data={data} options={options} width={350} height={322} />
      </div>
    </>
  )
}

export default ExpenseStatistics