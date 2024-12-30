// import React from 'react';

// function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       <p>Welcome, Admin! Here you can manage users, view reports, and handle course assignments.</p>
//       <ul>
//         <li><a href="/manage-users">Manage Users</a></li>
//         <li><a href="/view-reports">View Reports</a></li>
//         <li><a href="/course-assignments">Course Assignments</a></li>
//       </ul>
//     </div>
//   );
// }

// export default AdminDashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the auth token
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage users and courses.</p>
      <ul>
        <li><a href="/user-management">User Management</a></li>
        <li><a href="/course-management">Course Management</a></li>
        <li><a href="/reports">Reports</a></li>
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;

