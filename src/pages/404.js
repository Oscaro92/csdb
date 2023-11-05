// * import lib
import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'

// * import css
import 'bootstrap/dist/css/bootstrap.min.css'

// * import components
import Header from '../components/Header'
import Footer from '../components/Footer'

// * import image
import atabaque from '../img/atabaque.png'

const Error = () => {
    return (
        <div className="App">
            <Header></Header>
            <Container className="py-5">
                <Row className="py-5">
                    <Col className="py-5">
                        <h1 className="display-5 fw-bolder"> Page not found </h1>
                        <Image src={atabaque} fluid/>
                        <p className=""> La rode c'est pas par ici !!</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Error;