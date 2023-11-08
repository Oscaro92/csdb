// * import lib
import React, {useState} from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps"

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Modal, Row, Image} from "react-bootstrap";
import bg from "../../img/bg_sdb.jpg";

// * import data
import {markers} from "./function"
import image1 from "../../img/image1_home.jpg";

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const SDB = () => {
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
                        <Modal.Title>{markers[keySelect].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <ul>
                                        {markers[keySelect].profs.map((value) => (
                                            <>
                                                <li>{value.name}</li>
                                                <Image className="w-75" src={value.corde} fluid />
                                            </>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
                <div style={style_image}>
                    <Container className="py-lg-5 py-sm-0">
                        <Row className="py-5">
                            <Col>
                                <h1 className="display-1 fw-bolder py-5 text-primary">Sul da Bahia</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Col>
                        <Row>
                            <h1 className="display-5 fw-bolder py-5">Capoeira Sul da Bahia dans le monde</h1>
                        </Row>
                        <Row className="pb-5">
                            <Map height={600} defaultCenter={[48.8589, 0.2646]} defaultZoom={3}>
                                {markers.map((data, key) => (
                                    <Marker width={50} anchor={data.coordinates} color="#044d24" onClick={() => handleShow(key)}/>
                                ))}
                                <ZoomControl />
                            </Map>
                        </Row>
                    </Col>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default SDB;