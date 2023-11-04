import React from 'react'
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

//* import image
import logo from '../img/logo.png'


const Header = () => {
    return (
        <header style={{backgroundColor: '#044d24'}} className="p-2">
            <Navbar expand="md" >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3"
                        />
                        <Navbar.Text className="text-white" href="/">Capoeira Sul Da Bahia</Navbar.Text>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="ms-auto ">
                            <Nav.Link className="px-3 text-white" href="/">Accueil</Nav.Link>
                            <Nav.Link className="px-3 text-white" href="/cours-events">Cours & Événements</Nav.Link>
                            <Nav.Link className="px-3 text-white" href="/capoeira">Capoeira</Nav.Link>
                            <NavDropdown className="px-3" title={<span className="text-white">Notre école</span>} id="nav-dropdown">
                                <NavDropdown.Item href="/notre-ecole/sdb">Sul Da Bahia</NavDropdown.Item>
                                <NavDropdown.Item href="/notre-ecole/prof">Nos professeurs</NavDropdown.Item>
                                <NavDropdown.Item href="/notre-ecole/graduation">Graduation</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;