import React, { useState } from 'react';

function ManagerManagement({ managers, setManagers }) {
const [managerName, setManagerName] = useState('');
const [isAdding, setIsAdding] = useState(true);

const handleAddManager = () => {
setManagers([...managers, managerName]);
setManagerName('');
  };

const handleRemoveManager = () => {
setManagers(managers.filter(mgr => mgr !== managerName));
setManagerName('');
  };

return (
<div>
<h2>Manager Management</h2>
<button onClick={() => setIsAdding(true)}>Add Manager</button>
<button onClick={() => setIsAdding(false)}>Remove Manager</button>

{isAdding ? (
<div>
<input
type="text"
value={managerName}
onChange={(e) => setManagerName(e.target.value)}
placeholder="Manager Name"
/>
<button onClick={handleAddManager}>Add Manager</button>
</div>
) : (
<div>
<input
type="text"
value={managerName}
onChange={(e) => setManagerName(e.target.value)}
placeholder="Manager Name"
/>
<button onClick={handleRemoveManager}>Remove Manager</button>
</div>
)}
</div>
);
}

export default ManagerManagement;