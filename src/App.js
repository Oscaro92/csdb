// * import lib
import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'
import {Parallax} from 'react-parallax'

// * import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * import components
import Header from './components/Header'
import Footer from './components/Footer'
import CAT from  './components/CTA'

// * import image
import bg from "./img/bg_home.jpg"
import image1 from "./img/image1_home.jpg"
import image2 from "./img/image2_home.jpg"
import image3 from "./img/image3_home.jpg"

const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}


const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <div style={style_image} >
                <Container className="py-5">
                    <Row className="py-5">
                        <Col className="py-5">
                            <h1 className="text-start display-5 fw-bolder" style={{color: '#5EC198'}}>Capoeira Sul Da Bahia Suresnes</h1>
                            <p className="py-5 text-start fs-5 text-white"> L'association Nossa Cassa a pour but de développer l'activité de la capoeira, en proposant des cours à Suresnes.  </p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="pt-5">
                <Row  className="pt-5">
                    <Col className="px-lg-5">
                        <Image className="h-75" src={image1} fluid />
                    </Col>
                    <Col className="px-lg-5">
                        <h1 className="text-start display-5 fw-bolder">Qui sommes nous ?</h1>
                        <p className="py-3 text-start"> Créée en 2012, L’association Nossa C.A.S.A. vise à développer la capoeira à Suresnes et plus largement dans tous les Hauts de Seine. Nous faisons partie de l’école Capoeira Sul da Bahia, présent mondialement dans 18 pays. En plus des cours nous organisons des stages, évènements, voyages, spectacles, etc.</p>
                        <CAT></CAT>
                    </Col>
                </Row>
            </Container>
            <Parallax bgImage={image2} strength={750}>
                <Container className="py-5">
                    <Row className="py-5">
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
            <Container className="py-5">
                <Row className="py-5">
                    <Col>
                        <h1 className="text-start display-5 fw-bolder">La capoeira</h1>
                        <p className="py-3 text-start">Véritable sport national au brésil, la capoeira est un art martial mélangeant la lutte et la danse, rituel et jeu. Il est pratiqué dans une ronde et accompagné de musique et de chants. </p>
                        <CAT></CAT>
                    </Col>
                    <Col>
                        <Image src={image3} fluid/>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default App;
