import React, { useState } from 'react';

const BenefitsUtilizationsAnalysis = () => {
  // State to manage input values and the list of data entries
  const [benefitName, setBenefitName] = useState('');
  const [utilization, setUtilization] = useState('');
  const [data, setData] = useState([]);

  // Function to handle form submission
  const handleAddData = (e) => {
    e.preventDefault();
    
    // Add the new entry to the data list
    setData([
      ...data,
      {
        benefitName,
        utilization: Number(utilization),
      }
    ]);

    // Reset the form fields
    setBenefitName('');
    setUtilization('');
  };

  return (
    <div className="p-6 max-w-4xl rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Benefits Utilization Analysis</h2>
      
      {/* Form for inputting benefits data */}
      <form onSubmit={handleAddData} className="mb-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Benefit Name</label>
            <input
              type="text"
              value={benefitName}
              onChange={(e) => setBenefitName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter benefit name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Utilization (%)</label>
            <input
              type="number"
              value={utilization}
              onChange={(e) => setUtilization(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter utilization percentage"
              required
              min="0"
              max="100"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
        >
          Add Data
        </button>
      </form>

      {/* Table to display benefits data */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Benefits Data</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left">Benefit Name</th>
              <th className="px-4 py-2 text-left">Utilization (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{item.benefitName}</td>
                  <td className="px-4 py-2">{item.utilization.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="px-4 py-2 text-center text-gray-500">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenefitsUtilizationsAnalysis;
