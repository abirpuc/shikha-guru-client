import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import { FaMapMarkerAlt,FaRegEnvelope,FaMobileAlt,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-dark text-white mb-0' style={{bottom:'0', width:"100%"}}>
            <div className='container'>
                <Row className="container pt-4">
                    <Col>
                        <div className="mt-2 mr-2 text-xl">
                            <Image src={logo}></Image>
                        </div>
                        <div className="mt-2 mr-2 text-xl">
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            address
                        </div>
                        <div className="mt-2 mr-2 text-xl">
                            <FaRegEnvelope></FaRegEnvelope>
                            email
                        </div>
                        <div className="mt-2 mr-2 text-xl">
                            <FaMobileAlt></FaMobileAlt>
                            mobile
                        </div>
                    </Col>

                    <Col>
                        <h1>Follow Us In Social Media </h1>
                        <div className="mt-2 text-xl">
                            <FaFacebookSquare></FaFacebookSquare>
                            FaceBook
                        </div>
                        <div className="mt-2 text-xl">
                            <FaInstagramSquare></FaInstagramSquare>
                            InstaGram</div>
                        <div className="mt-2 text-xl">
                            <FaTwitterSquare></FaTwitterSquare>
                            Twitter</div>
                        <div className="mt-2 text-2xl">
                            <FaYoutube></FaYoutube>
                            Youtube</div>
                    </Col>
                </Row>
                <p className="text-center mt-4 mb-4">&copy; Copyright 2022 Shikka-Guru.com</p>
            </div>
        </div>
    );
};

export default Footer;