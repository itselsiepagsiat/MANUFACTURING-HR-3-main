import React, { useState } from 'react';

const CompensationOptimization = () => {
  // State to manage input values
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [result, setResult] = useState('');

  // Function to handle form submission and optimization
  const handleOptimize = (e) => {
    e.preventDefault();

    // Basic example of compensation optimization logic
    const optimizedCompensation = Number(salary) + Number(bonus);

    setResult(`Optimized Compensation: ₱${optimizedCompensation.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  };

  return (
    <div className="p-6 max-w-md rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Compensation Optimization</h2>
      <form onSubmit={handleOptimize}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Base Salary (₱)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter base salary in pesos"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bonus (₱)</label>
          <input
            type="number"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter bonus in pesos"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Optimize Compensation
        </button>
      </form>
      {result && <div className="mt-4 p-2 text-lg font-semibold">{result}</div>}
    </div>
  );
};

export default CompensationOptimization;
