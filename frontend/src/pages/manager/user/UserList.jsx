import React, { useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Elsie', email: 'elsiegandan@example.com', role: 'Manager' },
    { id: 2, name: 'Rhea', email: 'Rheapanget@example.com', role: 'Developer' },
    { id: 3, name: 'Remie', email: 'Remiepogi@example.com', role: 'Designer' },
  ]);

  const [newEmployee, setNewEmployee] = useState({ id: 0, name: '', email: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddOrEditEmployee = () => {
    if (isEditing) {
      setEmployees(employees.map(emp => emp.id === newEmployee.id ? newEmployee : emp));
    } else {
      setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    }
    setNewEmployee({ id: 0, name: '', email: '', role: '' });
    setIsEditing(false);
  };

  const handleEdit = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b">
              <td className="p-2">{employee.id}</td>
              <td className="p-2">{employee.name}</td>
              <td className="p-2">{employee.email}</td>
              <td className="p-2">{employee.role}</td>
              <td className="p-2">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(`Viewing employee: ${employee.name}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="p-2">
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="ID"
                value={newEmployee.id}
                onChange={(e) => setNewEmployee({ ...newEmployee, id: parseInt(e.target.value) })}
                disabled={isEditing} // Disable ID input when editing
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              />
            </td>
            <td className="p-2">
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              />
            </td>
            <td className="p-2">
              <select
                className="select select-bordered w-full"
                value={newEmployee.role}
                onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </td>
            <td className="p-2">
              <button
                className="btn btn-primary"
                onClick={handleAddOrEditEmployee}
              >
                {isEditing ? 'Update Employee' : 'Add Employee'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
