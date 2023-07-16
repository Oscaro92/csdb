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
        <footer style={{backgroundColor: '#5EC198', padding: '20px'}}>
            <Container>
                <Row>
                    <Col>
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
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                    </Col>
                    <Col>
                        <h3 className="mb-4">Pages</h3>
                        <Nav.Link href="/" className="pt-1">Accueil</Nav.Link>
                        <Nav.Link href="/event" className="pt-2">Evénement</Nav.Link>
                        <Nav.Link href="/cours" className="pt-2">Cours</Nav.Link>
                        <Nav.Link href="/capoeira" className="pt-2">Capoeira</Nav.Link>
                        <Nav.Link href="/notre-ecole/sdb" className="pt-2">Notre école</Nav.Link>
                    </Col>
                    <Col>
                        <h3 className="mb-4">Contact</h3>
                        <a href="tel:0606060606" className="text-decoration-none text-black"><img src={call} width="20" height="20" /> 0606060606</a>
                        <br/>
                        <a href="mailto:nossacasa.asso@gmail.com" className="text-decoration-none text-black"><img alt="mail" src={mail} width="20" height="20" />  nossacasa.asso@gmail.com</a>
                        <br/>
                        <img alt="pin" src={pin} width="20" height="20" /> 6 rue du test, à Test, France
                        <br/>
                        <br/>
                        <a href="https://www.facebook.com/associationnossacasa" target="_blank" className="p-1" ><img alt="fb" src={fb} width="30" height="30" /></a>
                        <a href="https://instagram.com/suldabahiaparis?igshid=MzRlODBiNWFlZA==" target="_blank" className="p-1" ><img alt="insta" src={insta} width="34" height="34" /></a>
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