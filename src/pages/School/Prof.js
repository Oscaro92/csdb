// * import lib
import React, {useState} from "react";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// * import object
import {profs} from './function'
import bg from "../../img/bg_profs.jpeg";

// * CSS
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

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
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{profs[keySelect].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span className="text-wrap">{profs[keySelect].description}</span>
                    </Modal.Body>
                </Modal>
                <div style={style_image} >
                    <Container className="py-lg-5 py-sm-0">
                        <Row className="py-5">
                            <Col>
                                <h1 className="display-1 fw-bolder py-5 text-primary">Nos professeurs</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row className="py-5">
                        {profs.map((data, key) => (
                            <Col className="py-5 d-flex justify-content-center">
                                <Card
                                    key={data.name}
                                    style={{ width: '18rem' }}
                                    className="mb-3"
                                >
                                    <Card.Img variant="top" src={data.picture}/>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Img src={data.corde} className="py-3"/>
                                        <Button style={{background: "#044d24", border: "#044d24"}} onClick={() => {handleShow(key)}}>Description</Button>
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