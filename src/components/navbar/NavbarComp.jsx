import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { Navbar, Nav, Container } from 'react-bootstrap'
import "./navbarcomp.css";

export default function NavbarComp() {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:8000/images/"

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }

    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="/" className="navbarTitle ml-0">Toronto Gems</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact Us</Nav.Link>
                            {/* <NavDropdown title="More" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav className="me-0">
                            <Nav.Link href="/Edit">{user && "New Post"}</Nav.Link>
                            <Nav.Link href="/login">{!user && "Login"}</Nav.Link>
                            <Nav.Link href="/register">{!user && "Register"}</Nav.Link>
                            {/* <Nav.Link href="/settings">{user && "Settings"}</Nav.Link> */}
                            <Nav.Link href="/" onClick={handleLogout}>{user && "Logout"}</Nav.Link>
                            {user && 
                                ( user.profilePic ?
                                (<Nav.Link href="/settings"><img className="topImg" src={PF + user.profilePic} alt="" /></Nav.Link>):
                                (<Nav.Link href="/settings"><b>{user.username}</b></Nav.Link>)
                            )}
                        </Nav>
                        {/* <Nav className="newPost">
                            <Nav.Link href="#">New Post</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
