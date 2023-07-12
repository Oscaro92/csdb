// * import lib
import React from "react";

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Col, Container, Row} from "react-bootstrap";

// * import image
import image from "../img/DSC_6301.jpg"

const Lesson = () => {
    return (
        <div className="App">
            <Header></Header>
                <Container className="p-5">
                    <Row className="p-5">
                        <Col className="p-5">
                            <h1>Cours Adulte</h1>
                            <p>Cours de capoeira le lundi et jeudi soir de 20H30 à 22H au XXX</p>
                        </Col>
                        <Col className="p-5">
                            <img src={image} width="500" height="500"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="p-5">
                    <Row className="p-5">
                        <Col className="p-5">
                            <img src={image} width="500" height="500"/>
                        </Col>
                        <Col className="p-5">
                            <h1>Cours Enfant</h1>
                            <p>Cours de capoeira le vendredi et le samedi de XX à XX au XXX</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="p-5">
                    <Row className="p-5">
                        <Col className="p-5">
                            <h1>Cours d'acrobatie</h1>
                            <p>Cours de capoeira basé sur l'acrobatie le mercredi de 20H30 à 22H15 au gymnase XXX</p>
                        </Col>
                        <Col className="p-5">
                            <img src={image} width="500" height="500"/>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;