// * import lib
import React from 'react'
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap'

// * import image
import logo from "../img/logo.png";
import mail from "../img/mail.svg";
import pin from  "../img/pin.svg";

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#5EC198', padding: '20px'}}>
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />
                            <p>Capoeira Sul Da Bahia - Suresnes</p>
                        </Navbar.Brand>
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                    </Col>
                    <Col>
                        <h3 style={{marginBottom: "20px"}}>Pages</h3>
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/event">Evénement</Nav.Link>
                        <Nav.Link href="/cours">Cours</Nav.Link>
                        <Nav.Link href="/capoeira">Capoeira</Nav.Link>
                        <Nav.Link href="/notre-ecole/sdb">Notre école</Nav.Link>
                    </Col>
                    <Col>
                        <h3 style={{marginBottom: "20px"}}>Contact</h3>
                        <img alt="mail" src={mail} width="20" height="20" /> email : test@test.com
                        <br/>
                        <img alt="pin" src={pin} width="20" height="20" /> adresse : 6 rue du test@test.com
                        <br/>
                        <br/>
                        Réseaux
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Make by <a href="https://pigallestud.io"> Le Studio Pigalle </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;