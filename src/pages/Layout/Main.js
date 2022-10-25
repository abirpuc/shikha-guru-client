import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../SharedPages/Footer/Footer';
import Header from '../SharedPages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <col>
                    <Main></Main>
                </col>
                <col>
                    <Footer></Footer>
                </col>
            </Container>
        </div>
    );
};

export default Main;