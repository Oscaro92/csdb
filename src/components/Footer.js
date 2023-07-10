import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        Logo + titre
                        & Réseau
                    </Col>
                    <Col>
                        Pages
                    </Col>
                    <Col>
                        Contact
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;