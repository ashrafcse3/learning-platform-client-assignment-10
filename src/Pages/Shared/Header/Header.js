import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    alt=""
                                    src="https://cdn-icons-png.flaticon.com/512/760/760921.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                                English Gugu
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Courses</Nav.Link>
                            <Nav.Link href="#link">FAQ</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        <Nav className="d-flex">
                            {/* Choosing theme start */}
                            <NavDropdown title="Theme" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Dark</NavDropdown.Item>
                            </NavDropdown>
                            {/* Choosing theme end */}
                            <Button className="me-2" variant="outline-success">Login</Button>
                            <Button className="me-2" variant="outline-success">Sign up</Button>
                            <Button className="me-2" variant="outline-success">User</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;