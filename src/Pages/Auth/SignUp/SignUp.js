import React from 'react';
import { Col, Container, Row, ListGroup, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { providerLogin, createUser, updateNameNPhoto } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
    }

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(fullName, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleProfileUpdate(fullName, photoURL);
                navigate('/');
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
    }

    const handleProfileUpdate = (name, photo) => {
        const updateInfo = {
            displayName: name,
            photoURL: photo
        }
        console.log(updateInfo);
        updateNameNPhoto(updateInfo)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Container>
            <Row>
                <Col lg="9">
                    <Form onSubmit={handleForm}>
                        <Form.Group className="mb-3" controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="fullName" type="text" placeholder="Enter full name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Enter photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Have an account? Go to <Link to="/login" className='link-dark'>Login</Link>
                            </Form.Text>
                        </Form.Group>
                        <div className='mb-3'>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </div>
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
                <Col lg="3">
                    <ListGroup>
                        <ListGroup.Item action onClick={handleGoogleSignIn}>
                            <FcGoogle /> Login with google
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            <FaGithub /> Login with github
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;