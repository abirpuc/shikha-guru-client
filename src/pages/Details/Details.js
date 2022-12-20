import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContex } from '../../Context/AuthContext/AuthProvider';
import { jsPDF } from "jspdf";
import logo from '../../Images/logo.png';
import './details.css'

const Details = () => {
    const {handleGetPremium, them} = useContext(AuthContex)
    const course = useLoaderData();
    const { title, rating, total_sales, img_url, description, publish_date, author,_id} = course;


    const handleCourse = (course) =>{
        console.log(course)
        return handleGetPremium(course)
    }

    const pdfGenerator = () =>{
        var doc  = new jsPDF('landscape','px','a4', 'false');
        doc.addImage(logo,'PNG',65,20,500,400);
        doc.addPage();
        doc.text(60,60, 'Download pdf using react js');
        doc.save('a.pdf');
    }
    
    return (
        <div className="mt-4 ">
            <Card className={`mt-8 mb-4 Larger shadow ${them}`} style={{ width: "75%" }}>
                <Card.Header>
                    <div className={`d-flex justify-content-between ${them}`}>
                        <div className='d-flex align-items-center'>
                            <Image roundedCircle className="me-2" src={author.images} style={{ height: "40px", width: "40px" }}></Image>
                            <div className="ml-2">
                                <p className="mb-0">{author.name}</p>
                                <p className="mb-0">{author.designation}</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-0">Rating</p>
                            <div className='d-flex'>
                                <FaStar className='text-warning'></FaStar>
                                <p className="mb-0">{rating}</p>
                            </div>
                        </div>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={img_url} style={{ height: "400px" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Published Date:{publish_date}</p>
                            <p>Total Seal:{total_sales}</p>
                        </div>
                        <div className='d-grid'>
                        <Button variant="primary" className="mt-2" onClick={pdfGenerator}>Download Pdf</Button>
                        <Button variant="primary" className="mt-2" onClick={() => handleCourse(course)}>Get Premium</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
        );
};

export default Details;