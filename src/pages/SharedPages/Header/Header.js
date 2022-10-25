import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContex);
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
                            <NavDropdown title="Login" id="navbarScrollingDropdown">
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
                            </NavDropdown>
                        </Nav>
                        <div>
                            {
                               <p>{ user?.displayName}</p>
                            }
                            <Link>LogOut</Link>
                            <button title="">Light</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;