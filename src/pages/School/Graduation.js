// * import lib
import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
            <div style={style_image}>
                <Container className="py-lg-5 py-sm-0">
                    <Row className="py-5">
                        <Col>
                            <h1 className="display-1 fw-bolder py-5 text-primary">Graduation</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="py-5">
                <Row className="py-5">
                    <Col sm={20} md={6}>
                        <h1 className="pb-1">Système de graduation adulte</h1>
                        <h3 className="pb-5">Capoeira Sul Da Bahia Mestre Railson</h3>
                        {adult_rope.map((data) => (
                            <div className="p-1">
                                <Image src={data.image} alt={data.name} fluid/>
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </Col>
                    <Col className="pt-5 pt-md-0" sm={20} md={6}>
                        <h1 className="pb-1">Système de graduation enfant</h1>
                        <h3 className="pb-5">Capoeira Sul Da Bahia Mestre Railson</h3>
                        {child_rope.map((data) => (
                            <div className="p-1">
                                <Image src={data.image} alt={data.name} fluid/>
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
