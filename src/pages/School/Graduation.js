// * import lib
import React from "react";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Row} from "react-bootstrap";

// * import obj
import {child_rope, adult_rope} from './function'

// * import img
import bg from '../../img/bg_graduation.jpg'

// * CSS
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const Graduation = () => {
    return (
        <div className="App">
            <Header></Header>
            <div style={style_image} >
                <Container className="py-5">
                    <Container className="py-5">
                        <Row className="py-5">
                            <Col className="py-5">
                                <h1 className="display-1 fw-bolder py-5" style={{color: '#5EC198'}}>Graduation</h1>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
            <Container className="py-5">
                <Row className="py-5">
                    <Col>
                        <h1 className="pb-1">Système de graduation adulte</h1>
                        <h3 className="pb-5">Capoeira Sul Da Bahia Mestre Railson</h3>
                        {adult_rope.map((data) => (
                            <div className="p-1">
                                <img src={data.image} width="400" height="50" />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <h1 className="pb-1">Système de graduation enfant</h1>
                        <h3 className="pb-5">Capoeira Sul Da Bahia Mestre Railson</h3>
                        {child_rope.map((data) => (
                            <div className="p-1">
                                <img src={data.image} width="400" height="50"  />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Graduation;
