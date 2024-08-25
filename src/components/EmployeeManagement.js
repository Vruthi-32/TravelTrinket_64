import React, { useState } from 'react';

function EmployeeManagement({ employees, setEmployees }) {
const [employeeName, setEmployeeName] = useState('');
const [employeeDepartment, setEmployeeDepartment] = useState('');
const [isAdding, setIsAdding] = useState(true);

const handleAddEmployee = () => {
setEmployees([...employees, { name: employeeName, department: employeeDepartment }]);
setEmployeeName('');
setEmployeeDepartment('');
};

const handleRemoveEmployee = () => {
setEmployees(employees.filter(emp => emp.name !== employeeName || emp.department !== employeeDepartment));
setEmployeeName('');
setEmployeeDepartment('');
};

return (
<div>
<h2>Employee Management</h2>
<button onClick={() => setIsAdding(true)}>Add Employee</button>
<button onClick={() => setIsAdding(false)}>Remove Employee</button>

{isAdding ? (
<div>
<input
type="text"
value={employeeName}
onChange={(e) => setEmployeeName(e.target.value)}
placeholder="Employee Name"
/>
<input
type="text"
value={employeeDepartment}
onChange={(e) => setEmployeeDepartment(e.target.value)}
placeholder="Department"
/>
<button onClick={handleAddEmployee}>Add Employee</button>
</div>
) : (
<div>
<input
type="text"
value={employeeName}
onChange={(e) => setEmployeeName(e.target.value)}
placeholder="Employee Name"
/>
<input
type="text"
value={employeeDepartment}
onChange={(e) => setEmployeeDepartment(e.target.value)}
placeholder="Department"
/>
<button onClick={handleRemoveEmployee}>Remove Employee</button>
</div>
)}
</div>
);
}

export default EmployeeManagement;