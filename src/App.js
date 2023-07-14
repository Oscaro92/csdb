// * import lib
import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'
import {Parallax, Background} from 'react-parallax'

// * import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * import components
import Header from './components/Header'
import Footer from './components/Footer'

// * import image
import test from "./img/test.jpg"
import image1 from "./img/DSC_6166.jpg"
import image2 from "./img/DSC_6360.jpg"
import image3 from "./img/DSC_6301.jpg"
import image4 from "./img/DSC_6244.jpg"

const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <div style={{backgroundImage: `url(${test})`, "background-position": "center"}} className="img-fluid" >
                <Container className="p-5">
                    <Row className="p-5">
                        <Col className="p-5">
                            <h1 className="p-5">Capoeira Sul Da Bahia - Suresnes</h1>
                            <p className="p-2">Top c'est super la capoeira on s'amuse trop ! Venez en faire avec nous quoi ! </p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="p-5">
                <Row  className="p-5">
                    <Col>
                        <img src={image2} width="402" height="604"/>
                    </Col>
                    <Col>
                        <h1>Qui sommes nous ?</h1>
                        <p>Un super groupe</p>
                    </Col>
                </Row>
            </Container>
            <Parallax bgImage={image4} strength={750}>
                <Container className="p-5">
                    <Row className="p-5">
                        <Col>
                            <h1>2</h1>
                            <p>professeurs</p>
                        </Col>
                        <Col>
                            <h1>15</h1>
                            <p>années de pratique</p>
                        </Col>
                        <Col>
                            <h1>800h</h1>
                            <p>de cours donnés</p>
                        </Col>
                        <Col>
                            <h1>80</h1>
                            <p>cordes attribuées</p>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
            <Container className="p-5">
                <Row className="p-5">
                    <Col>
                        <h1>Les cours</h1>
                        <p>PLein de cours différents </p>
                    </Col>
                    <Col>
                        <img src={image3} width="500" height="500"/>
                    </Col>
                </Row>
            </Container>
            <div className="p-5"></div>
            <Footer></Footer>
        </div>
    );
}

export default App;
