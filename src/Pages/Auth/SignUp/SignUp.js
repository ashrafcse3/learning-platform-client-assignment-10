import React from 'react';
import { Col, Container, Row, ListGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <Form>
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter full name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPhotoURL">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter photo URL" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Text className="text-muted">
                                    Have an account? Go to <Link to="/login" className='link-dark'>Login</Link>
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </Col>
                    <Col lg="3">
                        <ListGroup>
                            <ListGroup.Item action >
                                <FcGoogle /> Login with google
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                <FaGithub /> Login with github
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;