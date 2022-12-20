import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel fade className="mt-4 mb-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 opacity-75"
                        src="https://image.shutterstock.com/image-vector/c-plus-coding-language-sign-260nw-1390839050.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white">Learn C Programming</h3>
                        <p className="text-white">is the mother of programming,if learn programming start with C</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 opacity-75"
                        src="https://i0.wp.com/engineering.tiu.edu.iq/computer/wp-content/uploads/2019/02/phtyon.jpg?resize=800%2C400&ssl=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white">Learn Python Programming</h3>
                        <p className="text-white">If you want to be a data data scientist,Machine Learning, ..., You Learn Python</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 opacity-75"
                        src="https://www.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black">PHP Programming</h3>
                        <p className="text-black">
                           if you learn php,you learn laravel easily and become super back-end developer
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;