// * import lib
import React from "react";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Row} from "react-bootstrap";
import bg from "../../img/bg_sdb.jpg";

const SDB = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={{backgroundImage: `url(${bg})`, "background-position": "center"}} className="img-fluid p-5">
                    <Container className="p-5">
                        <Row className="p-5">
                            <Col className="p-5">
                                <h1 className="display-1 fw-bolder" style={{color: '#5EC198'}}>Sul da Bahia</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default SDB;