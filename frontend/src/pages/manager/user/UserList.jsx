import React from 'react';

const UserList = () => {
  // Example user data
  const users = [
    { id: 1, name: 'Elsie', email: 'elsieganda@gamil.com', roles: 'IT' },
    { id: 2, name: 'Rhea', email: 'rheapanget@gmail.com', roles: 'Admin' },
    { id: 3, name: 'Remie', email: 'remiepogi@gmail.com', roles: 'CEO'},
  ];

  // Handlers for button actions (placeholders)
  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View user with ID: ${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roles</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                <td>
                  <button 
                    className="btn btn-primary btn-sm mr-2" 
                    onClick={() => handleView(user.id)}
                  >
                    View
                  </button>
                  <button 
                    className="btn btn-secondary btn-sm mr-2" 
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
