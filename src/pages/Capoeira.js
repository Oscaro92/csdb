// * import lib
import React from "react";

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Col, Container, Row} from "react-bootstrap";

const Capoeira = () => {
    return (
        <div className="App">
            <Header></Header>
                <Container className="p-5">
                    <Row className="p-5">
                        <Col className="p-5">
                            <h1>Capoeira</h1>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Capoeira;