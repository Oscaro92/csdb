import React from 'react'
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

//* import image
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header style={{backgroundColor: '#5EC198', padding: "10px"}}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Capoeira Sul Da Bahia
                    </Navbar.Brand>
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/event">Evénement</Nav.Link>
                    <Nav.Link href="/cours">Cours</Nav.Link>
                    <Nav.Link href="/capoeira">Capoeira</Nav.Link>
                    <NavDropdown title="Notre école" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/notre-ecole/sdb">Sul Da Bahia</NavDropdown.Item>
                        <NavDropdown.Item href="/notre-ecole/prof">Les professeurs</NavDropdown.Item>
                        <NavDropdown.Item href="/notre-ecole/graduation">Graduation</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;