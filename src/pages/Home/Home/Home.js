import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.shutterstock.com/image-vector/c-plus-coding-language-sign-260nw-1390839050.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn C Programming</h3>
                        <p>is the mother of programming,if learn programming start with C</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://contentstatic.techgig.com/photo/79386213/5-myths-around-python-programming-language-that-every-programmer-must-know.jpg?88712"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Learn Python Programming</h3>
                        <p>If you want to be a data data scientist,Machine Learning, ..., You Learn Python</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.campfire.care/wp-content/uploads/2022/09/why-choose-php-programming-language-for-web-development.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>PHP Programming</h3>
                        <p>
                           if you learn php,you learn laravel easily and become super back-end developer
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;