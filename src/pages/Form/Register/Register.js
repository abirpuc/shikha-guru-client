import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Context/AuthContext/AuthProvider';

const Register = () => {
    const navigator = useNavigate();
    const {error, setError} = useState();
    const [accepted,setAccepted] = useState(false)
    const { createUser,userProfileUpdate } = useContext(AuthContex);


    const handleForm = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            updateUser(name,photoURL);
            navigator('/courses')
            form.reset();
            // console.log(user);
        }).catch(error => console.error(error))

    }

   const updateUser = (name,photoURL) =>{
   
        const profile = {
            displayName:name,
            photoURL: photoURL,
        }
        
        userProfileUpdate(profile)
        .then(() => {}).catch(() =>{})
   }

   const handleCondition = (event) =>{
    setAccepted(event.target.checked)
   }


    return (
        <div>
            <Form onSubmit={handleForm} style={{width: "50%", marginLeft: "200px"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                    <Form.Text className="text-muted">
                        {
                            error?<Form.Text className="text-muted">
                               password is wrong
                            </Form.Text>:
                            <p></p>
                        }
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    type="checkbox"
                    onClick={handleCondition}
                    label={
                        <>
                            Trams and <Link to="/condition"> Condition </Link>
                        </>
                    } />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Text >
                        <p className='text-success'>Already have an Account?<Link to="/login">Login</Link></p>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;