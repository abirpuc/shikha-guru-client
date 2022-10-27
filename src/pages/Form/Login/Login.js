import React, { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Login = () => {
    const [error, setError] = useState(false)
    const { login,singinWithGoogle } = useContext(AuthContex)
    const handleGooglesingin = () => {
        singinWithGoogle()
            .then(() => { })
            .catch(() => { })
    }

    const navigator = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        login(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                navigator(from, { replace: true });
                console.log(user)
            })
            .catch((error) => {
                console.error(error.message)
                setError(error.message)
            })
    }
    return (
        <div >
            <Form className="Larger shadow mt-4 p-4 rounded bg-light" onSubmit={handleForm} style={{ width: "50%", marginLeft: "200px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
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
                <Form.Text>
                    {
                        error?<p className="text-danger">{error}</p>:
                        " "
                    }
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ButtonGroup className="mb-2 d-grid gap-2 mt-4 w-50 mr-0" style={{ marginLeft: "200px" }}>
                <Button className="rounded" onClick={handleGooglesingin} variant="danger">Sing-In With Google</Button>
                <Button className="rounded" variant="secondary"> Sing-In With Github </Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;