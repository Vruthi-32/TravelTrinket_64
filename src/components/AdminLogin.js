import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AdminLogin = () => {
const { login } = useAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();

if (email === 'vri4464@gmail.com' && password === 'vj642444') {
login(true);
navigate('/adminDashboard');
} else {
setError('Invalid email or password');
}
};

return (
<div>
<h2>Admin Login</h2>
<form onSubmit={handleLogin}>
<div>
<label htmlFor="email">Email</label>
<input
id="email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter email"
required
/>
</div>
<div>
<label htmlFor="password">Password</label>
<input
id="password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Enter password"
required
/>
</div>
{error && <div>{error}</div>} {/* Display error message if any */}
<button type="submit">Login</button>
</form>
</div>
);
};

export default AdminLogin;