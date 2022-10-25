import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course.title);
    return (
       
        <div className="mt-4">
             <h1>{course.length}</h1>
           {
                course.map(c => <CourseCart
                    key={c.id}
                    course={course}
                ></CourseCart>)
           }
        </div>
    );
};

export default SingleCourse;