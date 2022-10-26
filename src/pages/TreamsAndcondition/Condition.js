import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Condition = () => {
    return (
        <div className='mx-auto'>
            <Card className='mx-auto mt-4' style={{width: "50%"}}>
                <Card.Header>Condition</Card.Header>
                <Card.Body>
                    <Card.Title>If register please read those condition</Card.Title>
                    <Card.Text>
                       <p>You must be spend more time for learning a language</p>
                       <p>work hard for learning a programming language</p>
                       <p>More practice </p>
                    </Card.Text>
                    <Button variant="primary"><Link to="/register" className='text-white nav-link'>Register</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Condition;