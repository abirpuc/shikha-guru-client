import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebase/firbaseConfing';

export const AuthContex = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading,setLoading] = useState(true);
    const [premium,setPremium] = useState([]);

    const createUser = (email,password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userProfileUpdate = (profile) =>{
        setLoading(false)
        return updateProfile(auth.currentUser,profile)
    }
    const singinWithGoogle = () =>{
        setLoading(false)
        return signInWithPopup(auth,provider)
    }

    const login = (email,password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(false)
        return signOut(auth);
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const handleGetPremium = (course) =>{
        const newPremium = [...premium,course];
        setPremium(newPremium);
    }

    const AuthInfo={
        user,
        loading,
        createUser,
        userProfileUpdate,
        singinWithGoogle,
        login,
        logOut,
        handleGetPremium,
        setPremium,
        premium,
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