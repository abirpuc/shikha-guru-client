import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const SideNav = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://shikka-guru-server.vercel.app/course-data')
            .then(res => res.json())
            .then(data => setCourse(data))
    })
    return (
        <div className="mt-4 border p-2 rounded Larger shadow">
            {
                course.map(c =>
                    <ButtonGroup vertical key={c.id} className="d-grid w-75 text-start">
                        
                            <Button variant="outline-dark" className="mt-2 w-full border-0 text-start" ><Link className="nav-link" to={`/single-courses/${c.id}`}>{c.name}</Link></Button>
                        
                    </ButtonGroup>
                )
            }
        </div>
    );
};

export default SideNav;