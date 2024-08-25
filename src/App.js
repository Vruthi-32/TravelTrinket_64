import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Shopping from './Shopping';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import theLogo from './theLogo.jpg';

const AppContent = () => {
const { isAuthenticated, isAdmin } = useAuth();

return (
<div>
<img
src={theLogo}
alt="TravelTrinkets logo featuring colorful chess pieces"
style={{ height: '80px', width: 'auto' }}
/>
<header>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/login">Login</Link></li>
<li><Link to="/dashboard">Dashboard</Link></li>
<li><Link to="/adminLogin">Admin Login</Link></li>
{isAuthenticated && isAdmin && <li><Link to="/adminDashboard">Admin Dashboard</Link></li>}
<li><Link to="/shopping">Shopping</Link></li>
</ul>
</nav>
</header>
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
<Route path="/dashboard" element={isAuthenticated && !isAdmin ? <Dashboard /> : <Navigate to="/login" />} />
<Route path="/adminLogin" element={!isAuthenticated ? <AdminLogin /> : <Navigate to="/adminDashboard" />} />
{/* Protected route */}
<Route path="/adminDashboard" element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Navigate to="/adminLogin" />} />
<Route path="/shopping" element={<Shopping />} />
<Route path="/contactUs" element={<ContactUs />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-service" element={<TermsOfService />} />
</Routes>
</main>
<footer>
<nav>
<ul>
<li><Link to="/contactUs">Contact Us</Link></li>
<li><Link to="/privacy-policy">Privacy Policy</Link></li>
<li><Link to="/terms-of-service">Terms of Service</Link></li>
</ul>
</nav>
<p>© TravelTrinkets 2024, all rights reserved</p>
</footer>
</div>
);
};

const App = () => (
<Router>
<AuthProvider>
<AppContent />
</AuthProvider>
</Router>
);

export default App;