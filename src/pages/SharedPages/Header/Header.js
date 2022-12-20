import React, { useState } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../../../Images/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const { pathname } = location;

    const { user, singinWithGoogle, logOut, toggle, setToggle,them } = useContext(AuthContex);

    const navigator = useNavigate();

    const singout = () => {
        logOut()
            .then(() => {
                navigator('/');
            })
    }

    const spliteLocation = pathname?.split("/");

    return (
        <div>
            <Navbar bg={`light ${them}`} expand="lg" className={`mx-8 ${them}`}>
                <Container container>
                    <Navbar.Brand>
                        <Link to="/"><Image src={logo} style={{ height: "60px" }} className="my-0 mx-8"></Image></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <li className={spliteLocation[1] === " "?"active":""}><Link  className="nav-link " variant="light" to="/">Home</Link></li>
                            <li> <Link className="nav-link " variant="light" to="/courses">Course</Link></li>
                           <li> <Link className="nav-link " variant="light" to="/checkout">Premium Course</Link></li>
                          <li> <Link className="nav-link " variant="light" to="/blog">Blog</Link></li>
                          <li> <Link className="nav-link " to="/blog">FAQ</Link></li>
                          {
                            user?" ":
                            <li> <Link className="nav-link "  to="/login">Forms</Link></li>
                          }
                        </Nav>
                        <div>
                            {
                                user? <><Image src={user?.photoURL} style={{height: '40px', width:"40px"}} roundedCircle  data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName}></Image>
                                <Button onClick={singout} className="me-2" variant="light">LogOut</Button></>:
                              <></>

                            }
                            <dvi onClick={()=>setToggle(!toggle)} >
                                {
                                    toggle? <Button  className="me-2 text-3xl" variant="light"><FaMoon></FaMoon></Button>
                                    :
                                    <Button  className="me-2 text-3xl" variant="light"><FaSun className="text-2xl"></FaSun ></Button>
                                    
                                }
                            </dvi>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;