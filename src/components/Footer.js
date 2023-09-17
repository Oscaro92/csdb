// * import lib
import React from 'react'
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap'

// * import image
import logo from "../img/logo.png";
import mail from "../img/mail.svg";
import pin from  "../img/pin.svg";
import call from "../img/call.svg";
import fb from "../img/icon-fb.png";
import insta from "../img/icons-insta.png";

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#00a44f'}} className="py-4">
            <Container>
                <Row className="d-flex justify-content-center justify-content-sm-around">
                    <Col sm={10} md={4}>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top mb-3"
                            />
                            <p>Capoeira Sul Da Bahia - Suresnes</p>
                        </Navbar.Brand>
                        <p> « A Capoeira é de quem treina » - La capoeira appartient à ceux qui s’entrainent </p>
                    </Col>
                    <Col className="pt-4 py-sm-0" sm={4} md={4}>
                        <h3 className="my-sm-4">Pages</h3>
                        <Nav.Link href="/" className="pt-1">Accueil</Nav.Link>
                        <Nav.Link href="/cours-events" className="pt-2">Cours & Événements</Nav.Link>
                        <Nav.Link href="/capoeira" className="pt-2">Capoeira</Nav.Link>
                        <Nav.Link href="/notre-ecole/sdb" className="pt-2">Notre école</Nav.Link>
                    </Col>
                    <Col className="pt-4 py-sm-0" sm={4} md={4}>
                        <h3 className="my-sm-4">Contact</h3>
                        <div className="py-1">
                            <a href="tel:0615788058" className="text-decoration-none text-black"><img src={call} width="20" height="20" /> 06 15 78 80 58</a>
                        </div>
                        <div className="py-1">
                            <a href="mailto:nossacasa.asso@gmail.com" className="text-decoration-none text-black"><img alt="mail" src={mail} width="20" height="20" />  nossacasa.asso@gmail.com</a>
                        </div>
                        <div className="py-1">
                            <a href="https://goo.gl/maps/BZSm7o3auTMV8aBw8" target="_blank" className="text-reset text-decoration-none"><img alt="pin" src={pin} width="20" height="20"  /> 65bis, Rue Gambetta 92150 SURESNES</a>
                        </div>
                        <div className="py-3">
                            <a href="https://www.facebook.com/associationnossacasa" target="_blank"><img alt="fb" src={fb} width="30" height="30" /></a>
                            <a href="https://instagram.com/suldabahiaparis?igshid=MzRlODBiNWFlZA==" target="_blank"><img alt="insta" src={insta} width="34" height="34" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3">
                        Make by <a href="https://pigallestud.io" target="_blank" className="text-decoration-none text-black"> Le Studio Pigalle </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;