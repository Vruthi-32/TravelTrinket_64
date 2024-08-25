import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
throw new Error("No 'root' element found in index.html");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
<React.StrictMode>
<ErrorBoundary>
<AuthProvider>
<App />
</AuthProvider>
</ErrorBoundary>
</React.StrictMode>
);

if (typeof reportWebVitals === 'function') {
reportWebVitals(console.log);
} else {
console.warn('reportWebVitals is not a function');
}