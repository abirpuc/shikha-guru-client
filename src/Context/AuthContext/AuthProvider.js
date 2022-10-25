import React, { createContext } from 'react';

export const AuthContex = createContext();

const AuthProvider = ({children}) => {
    const user={displayName:'Cytran'}
    const AuthInfo={user}
    return (
        <div>
            <AuthContex.Provider value={AuthInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;