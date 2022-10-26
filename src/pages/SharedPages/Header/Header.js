import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'
import logo from '../../../Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user, singinWithGoogle, logOut } = useContext(AuthContex);

    const navigator = useNavigate();

    const handleGooglesingin = () => {
        singinWithGoogle()
            .then(() => { })
            .catch(() => { })
    }

    const singout = () => {
        logOut()
            .then(() => { 
                navigator('/');
            })
    }

    const handleToggle = (event) => {
        
    }

    return (
        <div>
            <Navbar bg="light" expand="lg" className="mx-8">
                <Container Container>
                    <Navbar.Brand>
                        <Image src={logo} style={{ height: "80px" }} className="my-0 mx-8"></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>
                        <Nav
                            className="me-8 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/courses">Course</Link></Nav.Link>
                            <Nav.Link ><Link to="/checkout">Premium Course</Link></Nav.Link>
                            <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
                            <Nav.Link ><Link to="/blog">FAQ</Link></Nav.Link>
                            <Nav.Link ><Link onClick={handleShow}>Forms</Link></Nav.Link>
                        </Nav>
                        <div>
                            {
                                user?.photoURL ? <><Image src={user?.photoURL} style={{height: '40px', width:"40px"}} roundedCircle  data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName}></Image>
                                <Button onClick={singout} className="me-2" variant="light">LogOut</Button></>:
                               <></>

                            }
                            <dvi onClick={handleToggle}>
                                <Button className="me-2" variant="light">Light</Button>
                            </dvi>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <ButtonGroup className="w-75 mb-2 d-grid gap-2">
                        <Button className="rounded"><Link to="register" className="text-white nav-link">Registration</Link></Button>
                        <Button className="rounded" onClick={handleGooglesingin} variant="danger">Sing-In With Google</Button>
                        <Button className="rounded" variant="secondary"> Sing-In With Github </Button>
                    </ButtonGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                    <Link to="/login" className="text-white nav-link">Login</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;