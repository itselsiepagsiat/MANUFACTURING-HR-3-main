import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  // Data for the pie charts
  const compensationData = {
    labels: ['Base Salary', 'Bonuses', 'Stock Options'],
    datasets: [
      {
        label: 'Compensation Breakdown',
        data: [50000, 12000, 8000], // Example data
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const complianceData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Compliance Issues',
        data: [3, 5, 2, 4], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the bar charts
  const predictiveData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Prediction Confidence',
        data: [60, 25, 15], // Example data
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const behavioralData = {
    labels: ['Engaged', 'Neutral', 'Disengaged'],
    datasets: [
      {
        label: 'Employee Engagement',
        data: [50, 30, 20], // Example data
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <h1 className="text-3xl font-semibold text-left">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {/* User Management */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">User Management</h2>
            <p>Manage employee profiles, roles, and access permissions.</p>
            <div className="mt-4">
              <p className="text-sm">Total Users: 250</p>
              <p className="text-sm">Active Users: 240</p>
              <p className="text-sm">Inactive Users: 10</p>
            </div>
          </div>
        </div>

        {/* Payroll Processing */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Payroll Processing</h2>
            <p>Overview of payroll status and upcoming payroll cycles.</p>
            <div className="mt-4">
              <p className="text-sm">Next Payroll Date: 15/09/2024</p>
              <p className="text-sm">Processed Payrolls: 30</p>
              <p className="text-sm">Pending Payrolls: 5</p>
            </div>
          </div>
        </div>

        {/* Benefits Administration */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Benefits Administration</h2>
            <p>Track and manage employee benefits and enrollment.</p>
            <div className="mt-4">
              <p className="text-sm">Enrolled Employees: 200</p>
              <p className="text-sm">Pending Enrollments: 10</p>
            </div>
          </div>
        </div>

        {/* Compensation Planning */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Compensation Planning</h2>
            <div className="mt-4">
              <Pie data={compensationData} />
            </div>
          </div>
        </div>

        {/* Compliance Management */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Compliance Management</h2>
            <div className="mt-4">
              <Bar data={complianceData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        {/* Predictive and Behavioral Analytics */}
        <div className="card bg-white shadow-md p-6 rounded-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Predictive and Behavioral Analytics</h2>
            <div className="mt-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Prediction Confidence</h3>
                <Bar data={predictiveData} options={{ responsive: true }} />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold">Employee Engagement</h3>
                <Bar data={behavioralData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
