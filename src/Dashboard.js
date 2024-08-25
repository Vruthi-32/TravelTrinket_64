import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const departments = {
marketing: {
manager: { name: 'Priel', salary: 60000 },
employees: [
{ name: 'Viransh', salary: 36000 },
{ name: 'Dreeva', salary: 36000 },
{ name: 'Cheri', salary: 36000 },
{ name: 'Advik', salary: 36000 },
],
},

finance: {
manager: { name: 'Ruana', salary: 80000 },
employees: [
{ name: 'Krishvi', salary: 40000 },
{ name: 'Drishi', salary: 40000 },
{ name: 'Rishi', salary: 40000 },
{ name: 'Kriyansh', salary: 40000 },
],
},

communication: {
manager: { name: 'Vinil', salary: 80000 },
employees: [
{ name: 'Nikhil', salary: 62000 },
{ name: 'Harshit', salary: 62000 },
{ name: 'Jinvi', salary: 62000 },
{ name: 'Jinal', salary: 62000 },
],
},

humanResources: {
manager: { name: 'Mehek', salary: 80000 },
employees: [
{ name: 'Chehel', salary: 50000 },
{ name: 'Shikha', salary: 50000 },
{ name: 'Darsh', salary: 50000 },
{ name: 'Priyanka', salary: 50000 },
],
},
};

const Dashboard = () => {
const { isAuthenticated, logout } = useAuth();
const navigate = useNavigate();

if (!isAuthenticated) {
navigate('/login');
return null;
}

const user = {
name: 'Vriha',
department: 'marketing', // Can be 'marketing', 'finance', 'communication', or 'humanResources'
};

const handleLogout = () => {
logout();
navigate('/login');
};

return (
<div style={{ padding: '20px' }}>
<h1>Dashboard</h1>
<div style={{ marginBottom: '20px' }}>
<p>Department details:</p>
<h2>User Information</h2>
<p><strong>Name:</strong> {user.name}</p>
<p><strong>Department:</strong> {user.department.charAt(0).toUpperCase() + user.department.slice(1)}</p>
</div>
<div style={{ marginBottom: '20px' }}>
<h2>Department Information</h2>
{Object.keys(departments).map((departmentKey) => {
const departmentInfo = departments[departmentKey];
return (
<div key={departmentKey} style={{ marginBottom: '20px' }}>
<h3>{departmentKey.charAt(0).toUpperCase() + departmentKey.slice(1)}</h3>
<p><strong>Manager:</strong> {departmentInfo.manager.name}</p>
<p><strong>Manager Salary:</strong> ${departmentInfo.manager.salary.toLocaleString()}</p>
<h4>Employees</h4>
<ul>
{departmentInfo.employees.map((employee, index) => (
<li key={index}>
{employee.name} - ${employee.salary.toLocaleString()}
</li>
))}
</ul>
</div>
);
})}
</div>
<button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
Logout
</button>
</div>
);
};

export default Dashboard;