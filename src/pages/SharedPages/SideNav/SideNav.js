import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const SideNav = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-data')
            .then(res => res.json())
            .then(data => setCourse(data))
    })
    return (
        <div className="mb-4">
            <h1>Available Courses: {course.length}</h1>
            {
                course.map(c =>
                    <ButtonGroup vertical key={c.id} className="d-grid">
                        <Link to={`/single-courses/${c.id}`}>
                            <Button variant="outline-dark" className="mt-2 w-full" >{c.name}</Button>
                        </Link>
                    </ButtonGroup>
                )
            }
        </div>
    );
};

export default SideNav;