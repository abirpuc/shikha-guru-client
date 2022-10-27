import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Context/AuthContext/AuthProvider';
import PremiumCourse from './PremiumCourse/PremiumCourse';

const CheckOut = () => {
    const {premium} = useContext(AuthContex)
    console.log(premium)
    return (
        <div>
            <h1>Your Premium Courses:{premium?.length}</h1>
            {
                premium.map(p => <PremiumCourse
                    key={p._id}
                    course = { p }
                ></PremiumCourse>)
            }
        </div>
    );
};

export default CheckOut;