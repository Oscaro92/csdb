// * import lib
import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


// * import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * import components
import Header from './components/Header'
import Footer from './components/Footer'

// * import image
import image1 from "./img/DSC_6166.jpg"
import image2 from "./img/DSC_6360.jpg"
import image3 from "./img/DSC_6301.jpg"
import image4 from "./img/DSC_6308.jpg"

const App = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={{backgroundImage: `url(${image1})`, "background-size": "cover", minWidth: "60%", padding: "200px"}}>
                    <Container  className="p-5">
                        <Row style={{marginLeft: "100px"}}>
                            <Col>
                                <h1>Capoeira Sul Da Bahia - Suresnes</h1>
                                <p>Top c'est super la capoeira on s'amuse trop ! Venez en faire avec nous quoi ! </p>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            <Container className="p-5">
                <Row>
                    <Col>
                        <img src={image2} width="402" height="604"/>
                    </Col>
                    <Col>
                        <h1>Qui sommes nous ?</h1>
                        <p>Un super groupe</p>
                    </Col>
                </Row>
            </Container>
                <div style={{backgroundImage: `url(${image4})`, "background-size": "cover"}}>
                    <Container  className="p-5">
                        <Row>
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
                                <p>de cours donné</p>
                            </Col>
                            <Col>
                                <h1>80</h1>
                                <p>cordes attribué</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="p-5">
                    <Row>
                        <Col>
                            <h1>Les cours</h1>
                            <p>PLein de cours différent </p>
                        </Col>
                        <Col>
                            <img src={image3} width="500" height="500"/>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
}

export default App;
