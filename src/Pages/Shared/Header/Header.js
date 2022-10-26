import React from 'react';
import { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Link to='/' className='navbar-brand'>
                                <img
                                    alt=""
                                    src="https://cdn-icons-png.flaticon.com/512/760/760921.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                                English Gugu
                            </Link>
                        </Container>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link'>Courses</Link>
                            <Link to='/faq' className='nav-link'>FAQ</Link>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </Nav>
                        <Nav className="d-flex">
                            {/* Choosing theme start */}
                            <NavDropdown title="Theme" id="basic-nav-dropdown" className='me-2'>
                                <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Dark</NavDropdown.Item>
                            </NavDropdown>
                            {/* Choosing theme end */}
                            <Button className="me-2" variant="outline-success"><Link to='/login' className='nav-link'>Login</Link></Button>
                            <Button className="me-2" variant="outline-success"><Link to='/signup' className='nav-link'>Sign up</Link></Button>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id='bottom'>
                                        <strong>{user?.displayName}</strong>.
                                    </Tooltip>
                                }>
                                <Button className="me-2" variant="outline-success"><FaUserCircle />
                                </Button>
                            </OverlayTrigger>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;