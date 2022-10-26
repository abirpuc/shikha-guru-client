import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user } = useContext(AuthContex);
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
                            navbarScroll
                        >
                            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/courses">Course</Link></Nav.Link>
                            <Nav.Link ><Link onClick={handleShow}>Forms</Link></Nav.Link>
                            {/* <NavDropdown title="Login" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/register">
                                        Registration
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/register">
                                        Sing-in With Google
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/register">
                                        Sing-in With Github
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown> */}
                        </Nav>
                        <div>
                            {
                                <p>{user?.displayName}</p>
                            }
                            <Link>LogOut</Link>
                            <button title="">Light</button>
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
                        <Link to="register"><Button className="rounded">     Registration     </Button></Link>
                        <Link><Button className="rounded" variant="danger">Sing-In With Google</Button></Link>
                        <Link><Button className="rounded" variant="secondary"> Sing-In With Github </Button></Link>
                    </ButtonGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;