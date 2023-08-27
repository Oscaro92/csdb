import React from 'react'
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

//* import image
import logo from '../img/logo.png'


const Header = () => {
    return (
        <header style={{backgroundColor: '#5EC198'}} className="p-2">
            <Navbar key="sm" expand="sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3"
                        />
                        Capoeira Sul Da Bahia
                    </Navbar.Brand>
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/event">Evénement</Nav.Link>
                    <Nav.Link href="/cours">Cours</Nav.Link>
                    <Nav.Link href="/capoeira">Capoeira</Nav.Link>
                    <NavDropdown title="Notre école" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/notre-ecole/sdb">Sul Da Bahia</NavDropdown.Item>
                        <NavDropdown.Item href="/notre-ecole/prof">Nos professeurs</NavDropdown.Item>
                        <NavDropdown.Item href="/notre-ecole/graduation">Graduation</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;