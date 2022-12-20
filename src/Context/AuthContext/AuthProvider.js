import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firbaseConfing';

export const AuthContex = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [premium, setPremium] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [them, setThem] = useState('light')

    if (toggle === true) {
        if (them === 'dark') {
            setThem('light')
        }
    } else {
        if (them === 'light') {
            setThem('dark')
        }
    }

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userProfileUpdate = (profile) => {
        setLoading(false)
        return updateProfile(auth.currentUser, profile)
    }
    const singinWithGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gitLogin = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const handleGetPremium = (course) => {
        const newPremium = [...premium, course];
        setPremium(newPremium);
    }

    const AuthInfo = {
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
        gitLogin,
        toggle,
        setToggle,
        them
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