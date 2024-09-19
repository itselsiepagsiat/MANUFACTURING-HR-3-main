import React, { useState } from 'react';

// Example function to simulate API call
const fetchData = async (requestType) => {
  // Simulate an API call based on request type
  // In a real application, replace this with actual API requests
  return new Promise((resolve) => setTimeout(() => resolve(`Data for ${requestType}`), 1000));
};

const CompensationOptimization = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRequest = async (requestType) => {
    setLoading(true);
    const result = await fetchData(requestType);
    setData(result);
    setLoading(false);
  };

  return (
    <div className="p-6 shadow-md ">
      <h1 className="text-2xl font-bold mb-4">Compensation Optimization</h1>
      <div className="grid gap-4 mb-4">
        <button
          onClick={() => handleRequest('Payroll Records')}
          className="btn btn-primary"
        >
          Request Payroll Records
        </button>
        <button
          onClick={() => handleRequest('Legal Review')}
          className="btn btn-primary"
        >
          Request Legal Review
        </button>
        <button
          onClick={() => handleRequest('Compensation Review')}
          className="btn btn-primary"
        >
          Request Compensation Review
        </button>
        <button
          onClick={() => handleRequest('Salary Structure')}
          className="btn btn-primary"
        >
          Request Salary Structure Details
        </button>
        <button
          onClick={() => handleRequest('Store Documents')}
          className="btn btn-primary"
        >
          Request to Store Documents
        </button>
        <button
          onClick={() => handleRequest('Incentives')}
          className="btn btn-primary"
        >
          Request Incentive Details
        </button>
      </div>
      {loading && <p className="text-blue-600">Loading...</p>}
      {data && (
        <div className="mt-4 p-4 border border-blue-500 rounded-lg">
          <h2 className="text-xl font-semibold">Data:</h2>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default CompensationOptimization;
