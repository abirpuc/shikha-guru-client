import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(c => <CourseCart
                    key={c._id}
                    courses={c}
                ></CourseCart>)
            }
        </div>
    );
};

export default Courses;