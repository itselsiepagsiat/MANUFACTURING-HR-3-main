import React, { useState } from 'react';
import 'daisyui/dist/full.css'; // Import DaisyUI styles

const RequestBudget = () => {
  const [formData, setFormData] = useState({
    department: '',
    amount: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Request Budget</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter department name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Requested Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter budget description"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBudget;
