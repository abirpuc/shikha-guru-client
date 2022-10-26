import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import app from '../../firebase/firbaseConfing';

export const AuthContex = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userProfileUpdate = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }
    const singinWithGoogle = () =>{
        return signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        return signOut(auth);
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    },[]) 
    const AuthInfo={
        user,
        createUser,
        userProfileUpdate,
        singinWithGoogle,
        logOut,
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