import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeManagement from './EmployeeManagement';
import DepartmentManagement from './DepartmentManagement';
import SalaryManagement from './SalaryManagement';
import ManagerManagement from './ManagerManagement';
import { useAuth } from '../hooks/useAuth';

function AdminDashboard() {
const { isAuthenticated, logout } = useAuth();
const navigate = useNavigate();

const [employees, setEmployees] = useState([]);
const [departments, setDepartments] = useState([]);
const [salaries, setSalaries] = useState([]);
const [managers, setManagers] = useState([]);

useEffect(() => {
if (!isAuthenticated) {
navigate('/adminLogin');
}
}, [isAuthenticated, navigate]);

if (!isAuthenticated) {
return null;
}

return (
<div style={{ padding: '20px' }}>
<h1>Admin Dashboard</h1>
<button 
onClick={logout} 
style={{ 
          padding: '10px 20px',
backgroundColor: '#007bff', 
color: '#fff', 
border: 'none', 
borderRadius: '5px', 
cursor: 'pointer' 
}}
>
Logout
</button>
<div style={{ marginTop: '20px' }}>
<EmployeeManagement 
employees={employees} 
setEmployees={setEmployees} 
/>

<DepartmentManagement
departments={departments}
setDepartments={setDepartments}
employees={employees}
setEmployees={setEmployees}
/>

<SalaryManagement
salaries={salaries}
setSalaries={setSalaries}           employees={employees} 
/>

<ManagerManagement 
managers={managers}
setManagers={setManagers}
/>
</div>
</div>
);
}

export default AdminDashboard;