import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContex)

    const navigator = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

        login(email,password)
        .then((result)=>{
            const user = result.user;
            form.reset();
            navigator('/courses')
            console.log(user)
        })
        .catch((error) =>{
            console.error(error.message)
        })
    }
    return (
        <div>
            <Form onSubmit={handleForm} style={{width: "50%", marginLeft: "200px"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Text >
                        <p className='text-success'>I have no Account?<Link to="/register">Register</Link></p>
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;