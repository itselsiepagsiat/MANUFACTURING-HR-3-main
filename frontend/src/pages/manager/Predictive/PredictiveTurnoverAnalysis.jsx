import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the required components of Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PredictiveTurnoverAnalysis = () => {
  // Example data for the bar chart
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Example time periods
    datasets: [
      {
        label: 'Predicted Turnover Rate (%)',
        data: [10, 15, 8, 12], // Example turnover rates
        backgroundColor: '#4CAF50', // Green color for the bars
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Turnover Rate: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6 max-w-4xl  shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Predictive Turnover Analysis</h1>
      <p className="mb-4 text-white-700">
        This chart displays the predicted employee turnover rates for each quarter. 
        Analyzing these predictions helps in planning and implementing strategies to reduce turnover.
      </p>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PredictiveTurnoverAnalysis;
