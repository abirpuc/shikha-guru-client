import React, { useContext } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const PremiumCourse = ({course}) => {
    const{user} = useContext(AuthContex)
    const {_id,title,img_url,description} = course
    return (
        <div>
            <Card className="mt-8 mb-4 Larger shadow" style={{ width: "75%" }}>
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Image roundedCircle className="me-2" src={user?.photoURL} style={{ height: "40px", width: "40px" }}></Image>
                            <div className="ml-2">
                                <p className="mb-0">{user?.displayName}</p>
                            </div>
                        </div>

                    </div>
                </Card.Header>
                <Card.Img variant="top" src={img_url} style={{ height: "400px" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            description
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <div>
                        <Button variant="primary"><Link className="text-white nav-link">Continue Course</Link></Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default PremiumCourse;