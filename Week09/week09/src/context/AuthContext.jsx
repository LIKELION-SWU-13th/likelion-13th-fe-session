import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedin, setIsLoggedIn ] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}