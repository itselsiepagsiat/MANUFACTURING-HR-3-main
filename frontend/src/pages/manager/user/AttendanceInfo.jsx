import React, { useState } from 'react'; 

const initialData = [
  { id: 1, name: 'Elsie', date: '2024-10-03', timeIn: '09:00 AM', timeOut: '05:00 PM', status: 'Present' },
  { id: 2, name: 'Rhea', date: '2024-10-03', timeIn: '00:00 AM', timeOut: '00:00 PM', status: 'Absent' },
  // Add more sample data as needed
];

const AttendanceInfo = () => {
  // State to hold attendance data
  const [attendanceData, setAttendanceData] = useState(initialData);

  // Handlers for button actions (placeholders)
  const handleDetails = (id) => {
    console.log(`Details for ID: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit record with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete record with ID: ${id}`);
    setAttendanceData(attendanceData.filter(record => record.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance Information</h1>
      <table className="table w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time In</th> {/* New column for time in */}
            <th className="px-4 py-2">Time Out</th> {/* New column for time out */}
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map(record => (
            <tr key={record.id} className="border-t">
              <td className="px-4 py-2">{record.id}</td>
              <td className="px-4 py-2">{record.name}</td>
              <td className="px-4 py-2">{record.date}</td>
              <td className="px-4 py-2">{record.timeIn}</td> {/* Display time in */}
              <td className="px-4 py-2">{record.timeOut}</td> {/* Display time out */}
              <td className="px-4 py-2">{record.status}</td>
              <td className="px-4 py-2">
                <button 
                  className="btn btn-info btn-sm mr-2" 
                  onClick={() => handleDetails(record.id)}
                >
                  Details
                </button>
                <button 
                  className="btn btn-secondary btn-sm mr-2" 
                  onClick={() => handleEdit(record.id)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-error btn-sm" 
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceInfo;
