import React from 'react'
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

//* import image
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary m-auto">
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
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#home">Evénement</Nav.Link>
                    <Nav.Link href="#home">Cours</Nav.Link>
                    <Nav.Link href="#home">Capoeira</Nav.Link>
                    <NavDropdown title="Notre école" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sul Da Bahia</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Les professeurs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Graduation</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Contact</Nav.Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;