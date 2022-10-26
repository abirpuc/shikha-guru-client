import React, { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import app from '../../firebase/firbaseConfing';

export const AuthContex = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user={displayName:'Cytran'}

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userProfileUpdate = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }
    const AuthInfo={
        user,
        createUser,
        userProfileUpdate,
    }
    return (
        <div>
            <AuthContex.Provider value={AuthInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;