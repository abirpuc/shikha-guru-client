import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    const {title,rating,total_sales,img_url,description,publish_date,autor} = courses;
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