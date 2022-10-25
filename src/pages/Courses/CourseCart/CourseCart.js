import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

const CourseCart = ({ courses }) => {
    const { title, rating, total_sales, img_url, description, publish_date, author } = courses;
    console.log(courses);
    return (
        <div className="mt-4">
            <Card className="mt-8 mb-4" style={{ width: "75%" }}>
                <Card.Header>
                    <div className='d-flex justify-content-between'>
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
                        <div>
                        <Button variant="primary">Go somewhere</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCart;