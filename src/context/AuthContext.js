import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);

const login = (asAdmin = false) => {
setIsAuthenticated(true);
if (asAdmin) {
setIsAdmin(true);
}
};

const logout = () => {
setIsAuthenticated(false);
setIsAdmin(false);
};

const contextValue = {
isAuthenticated,
isAdmin,
login,
logout
};

return (
<AuthContext.Provider value={contextValue}>
{children}
</AuthContext.Provider>
);
};