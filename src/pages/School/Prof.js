// * import lib
import React, {useState} from "react";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// * import object
import {profs} from './function'


const Prof = () => {
    const [show, setShow] = useState(false);
    const [keySelect, setKeySelect] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (key) => {
        setShow(true);
        setKeySelect(key)
    }


    return (
        <div className="App">
            <Header></Header>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{profs[keySelect].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{profs[keySelect].description}</Modal.Body>
                </Modal>
                <Container className="py-5">
                    <Row className="py-5">
                        <h1> Nos professeurs </h1>
                        {profs.map((data, key) => (
                            <Col className="py-5">
                                <Card
                                    key={data.name}
                                    style={{ width: '18rem' }}
                                    className="mb-3"
                                >
                                    <Card.Img variant="top" src={data.picture}/>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Img src={data.corde} className="py-3"/>
                                        <Button onClick={() => {handleShow(key)}}>Description</Button>
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