// * import lib
import React from 'react'
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

// * import image
import logo from "../img/logo.png";

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#044d24'}} className="py-4">
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
                            <p className="text-white">Capoeira Sul Da Bahia - Suresnes</p>
                        </Navbar.Brand>
                        <p className="text-white"> « A Capoeira é de quem treina » - La capoeira appartient à ceux qui s’entrainent </p>
                    </Col>
                    <Col className="pt-4 py-sm-0" sm={4} md={4}>
                        <h3 className="my-sm-4 text-white">Pages</h3>
                        <Nav.Link href="/" className="pt-1 text-white">Accueil</Nav.Link>
                        <Nav.Link href="/cours-events" className="pt-2 text-white">Cours & Événements</Nav.Link>
                        <Nav.Link href="/capoeira" className="pt-2 text-white">Capoeira</Nav.Link>
                        <Nav.Link href="/notre-ecole/sdb" className="pt-2 text-white">Notre école</Nav.Link>
                    </Col>
                    <Col className="pt-4 py-sm-0" sm={4} md={4}>
                        <h3 className="my-sm-4 text-white">Contact</h3>
                        <div className="py-1">
                            <a href="tel:0615788058" className="text-decoration-none text-white"><i class="bi bi-telephone-fill text-white h6"></i> 06 15 78 80 58</a>
                        </div>
                        <div className="py-1">
                            <a href="mailto:nossacasa.asso@gmail.com" className="text-decoration-none text-white"><i class="bi bi-envelope-fill text-white h6"></i>  nossacasa.asso@gmail.com</a>
                        </div>
                        <div className="py-1">
                            <a href="https://goo.gl/maps/BZSm7o3auTMV8aBw8" target="_blank" className="text-decoration-none text-white"><i class="bi bi-geo-alt-fill text-white h6"></i> 65bis, Rue Gambetta 92150 SURESNES</a>
                        </div>
                        <div className="py-3">
                            <a href="https://www.facebook.com/associationnossacasa" target="_blank"><i className="bi bi-facebook text-white h3" alt="fb"></i></a>
                            <a href="https://instagram.com/suldabahiaparis?igshid=MzRlODBiNWFlZA==" target="_blank"><i class="bi bi-instagram text-white h3 ms-2"></i></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3">
                        <span className="text-white">Make by <a href="https://pigallestud.io" target="_blank" className="text-decoration-none text-white"> Le Studio Pigalle </a> </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;