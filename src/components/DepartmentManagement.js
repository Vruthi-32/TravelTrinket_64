import React, { useState } from 'react';

function DepartmentManagement({ departments, setDepartments, employees, setEmployees }) {
  const [departmentName, setDepartmentName] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [isAssigning, setIsAssigning] = useState(true);

  const handleAddDepartment = () => {
    setDepartments([...departments, departmentName]);
    setDepartmentName('');
  };

  const handleRemoveDepartment = () => {
    setDepartments(departments.filter(dep => dep !== departmentName));
    setDepartmentName('');
  };

  const handleAssignEmployee = () => {
    setEmployees(employees.map(emp => 
      emp.name === employeeName ? { ...emp, department: departmentName } : emp
    ));
    setEmployeeName('');
    setDepartmentName('');
  };

  const handleRemoveEmployeeFromDepartment = () => {
    setEmployees(employees.map(emp => 
      emp.name === employeeName ? { ...emp, department: '' } : emp
    ));
    setEmployeeName('');
    setDepartmentName('');
  };

  return (
    <div>
      <h2>Department Management</h2>
      <button onClick={() => setIsAssigning(true)}>Assign Employee</button>
      <button onClick={() => setIsAssigning(false)}>Remove Employee from Department</button>

      {isAssigning ? (
        <div>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Employee Name"
          />
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="Department"
          />
          <button onClick={handleAssignEmployee}>Assign Employee</button>
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
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="Department"
          />
          <button onClick={handleRemoveEmployeeFromDepartment}>Remove Employee</button>
        </div>
      )}
    </div>
  );
}

export default DepartmentManagement;