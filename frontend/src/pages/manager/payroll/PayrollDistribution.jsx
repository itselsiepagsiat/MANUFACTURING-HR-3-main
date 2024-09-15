import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Elsie', baseSalary: 3000, bonus: 500, deductions: 200 },
  { id: 2, name: 'Rhea', baseSalary: 3200, bonus: 600, deductions: 150 },
  { id: 3, name: 'Remie', baseSalary: 2900, bonus: 400, deductions: 100 },
  // Add more sample data as needed
];

const PayrollDistribution = () => {
  const [payrollData, setPayrollData] = useState(initialData);

  const calculateTotal = (baseSalary, bonus, deductions) => {
    return baseSalary + bonus - deductions;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Payroll Distribution</h1>
      <div className="overflow-x-auto">
        <table className="table table-mb w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Base Salary</th>
              <th>Bonus</th>
              <th>Deductions</th>
              <th>Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>₱{record.baseSalary.toFixed(2)}</td>
                <td>₱{record.bonus.toFixed(2)}</td>
                <td>₱{record.deductions.toFixed(2)}</td>
                <td>₱{calculateTotal(record.baseSalary, record.bonus, record.deductions).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollDistribution;
