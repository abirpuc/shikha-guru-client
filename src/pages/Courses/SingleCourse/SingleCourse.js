import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const SingleCourse = () => {
    const courses = useLoaderData();
    return (
       
        <div className="mt-4">
             <h1>{courses.length}</h1>
           {
                courses.map(c => <CourseCart
                    key={c.id}
                    courses={c}
                ></CourseCart>)
           }
        </div>
    );
};

export default SingleCourse;