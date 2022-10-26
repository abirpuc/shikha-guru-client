import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthContext/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContex);
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }

    if(loading){
        return <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return children
};

export default PrivateRouter;