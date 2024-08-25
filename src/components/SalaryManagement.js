import React, { useState } from 'react';

function SalaryManagement({ salaries, setSalaries, employees }) {
const [employeeId, setEmployeeId] = useState('');
const [salary, setSalary] = useState('');
const [isAdding, setIsAdding] = useState(true);

const handleAddSalary = () => {
setSalaries([...salaries, { employeeId, salary }]);
setEmployeeId('');
    setSalary('');
};

const handleRemoveSalary = () => {
setSalaries(salaries.filter(sal => sal.employeeId !== employeeId));
setEmployeeId('');
};

return (
<div>
<h2>Salary Management</h2>
<button onClick={() => setIsAdding(true)}>Add Salary</button>
<button onClick={() => setIsAdding(false)}>Remove Salary</button>

{isAdding ? (
<div>
<input
type="text"
            value={employeeId}
onChange={(e) => setEmployeeId(e.target.value)}
placeholder="Employee ID"
/>
<input
type="text"
value={salary}
onChange={(e) => setSalary(e.target.value)}
placeholder="Salary Amount"
/>
<button onClick={handleAddSalary}>Add Salary</button>
</div>
) : (
<div>
<input
type="text"
value={employeeId}
onChange={(e) => setEmployeeId(e.target.value)}
placeholder="Employee ID"
/>
<button onClick={handleRemoveSalary}>Remove Salary</button>
</div>
)}
</div>
);
}

export default SalaryManagement;