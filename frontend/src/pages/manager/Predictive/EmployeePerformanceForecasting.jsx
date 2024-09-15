import React, { useState } from 'react';

const EmployeePerformanceForecasting = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [performanceData, setPerformanceData] = useState('');
  const [forecast, setForecast] = useState(null);

  const handleSubmit = () => {
    // Simulated forecast logic (this should be replaced with real forecasting logic)
    const performanceValue = parseFloat(performanceData) || 0;
    const forecastResult = `Forecast for ${employeeName}: PHP ${performanceValue * 1.1.toFixed(2)} expected based on input data.`;
    setForecast(forecastResult);
  };

  return (
    <div className="p-6 max-w-md rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Employee Performance Forecasting</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">Employee Name</label>
          <input
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter employee name"
          />
        </div>
        
        <div>
          <label htmlFor="performanceData" className="block text-sm font-medium text-gray-700">Performance Data (in PHP)</label>
          <input
            id="performanceData"
            type="number"
            step="0.01"
            value={performanceData}
            onChange={(e) => setPerformanceData(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter performance data in PHP"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Forecast Performance
        </button>
        
        {forecast && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold">Forecast Result</h3>
            <p>{forecast}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePerformanceForecasting;
