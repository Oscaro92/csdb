// * import lib
import React from "react";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Row} from "react-bootstrap";

// * import image
import graduation1 from '../../img/graduation_adulte.jpg'
import graduation2 from '../../img/graduation_enfant.jpg'

const Graduation = () => {
    return (
        <div>
            <Header></Header>
            <Container className="p-5">
                <Col>
                    <Row className="p-5">
                        <h1>Graduation Adulte</h1>
                        <img src={graduation1}/>
                    </Row>
                    <Row className="p-5">
                        <h1>Graduation Enfant</h1>
                        <img src={graduation2}/>
                    </Row>
                </Col>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Graduation;