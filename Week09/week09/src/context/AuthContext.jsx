import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const savedLoginState = localStorage.getItem("isLoggedIn");
        if (savedLoginState === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
