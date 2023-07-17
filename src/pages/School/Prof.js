// * import lib
import React from "react";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Row, Card} from "react-bootstrap";

// * import object
import {profs} from './function'

const Prof = () => {
    return (
        <div className="App">
            <Header></Header>
                <Container className="py-5">
                    <Row className="py-5">
                        <h1> Nos professeurs </h1>
                        {profs.map((data) => (
                            <Col className="py-5">
                                <Card
                                    key={data.name}
                                    style={{ width: '18rem' }}
                                    className="mb-3"
                                >
                                    <Card.Img variant="top" src={data.picture}/>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>{data.description}</Card.Text>
                                        <Card.Img src={data.corde}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Prof;