// * import lib
import React from "react";
import {Col, Container, Row, Table, Carousel} from "react-bootstrap";

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'

// * import image
import bg from "../img/bg_lesson.jpg"
import profs from "../img/profs.jpg"

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const Lesson = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={style_image} className="py-5">
                    <Container className="py-5">
                        <Row className="py-5">
                            <Col className="py-5">
                                <h1 className="display-1 fw-bolder" style={{color: '#5EC198'}}>Cours</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row className="py-5">
                        <Col>
                            <h1>Cours adulte et enfant</h1>
                            <p>Cours avec Romain et David </p>
                        </Col>
                        <Col>
                            <img src={profs} width="65%"/>
                        </Col>
                    </Row>
                </Container>
                <Container  className="py-5">
                    <Col>
                        <Row className="py-5">
                            <h1>Planning des cours de la semaine</h1>
                        </Row>
                        <Row>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>Horaires</th>
                                    <th>Lundi</th>
                                    <th>Mardi</th>
                                    <th>Mercredi</th>
                                    <th>Jeudi</th>
                                    <th>Vendredi</th>
                                    <th>Samedi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>12H00 - 13H00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <p>Cours de capoeira baby - Centre sportif des raguidelles</p>
                                        <p className="fst-italic">5-7 ans<br/>Prof. Sorriso</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>13H00 - 14H30</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <p>Cours de capoeira enfant - Centre sportif des raguidelles</p>
                                        <p className="fst-italic">7-12 ans<br/>Prof. Sorriso</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>14H30 - 16H00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <tr>
                                        <td>
                                            <p>Cours de capoeira ado - Centre sportif des raguidelles</p>
                                            <p className="fst-italic">12ans et + <br/>Moniteur Brutal</p>
                                        </td>
                                        <td>
                                            <p>Cours de capoeira tout âge - Centre sportif des raguidelles (13H-)</p>
                                            <p className="fst-italic">4 ans et + <br/>Prof. Sorriso</p>
                                        </td>
                                    </tr>
                                </tr>
                                <tr>
                                    <td>19H00 - 20H00</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <p>Cours de capoeira tout âge - Cogedim Club</p>
                                        <p className="fst-italic">Prof. Sorriso</p>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>20H30 - 22H30</td>
                                    <td>
                                        <p>Cours de capoeira adulte - Gymnase du Belvédère</p>
                                        <p className="fst-italic">Prof. Pézão</p></td>
                                    <td>-</td>
                                    <td>
                                        <p>Cours d'acrobatie - Centre sportif Arnaud Beltrame</p>
                                        <p className="fst-italic">Prof. Pézão et Sorriso</p>
                                    </td>
                                    <td>
                                        <p>Cours de capoeira adulte - Gymnase du Belvédère</p>
                                        <p className="fst-italic">Prof. Sorriso</p>
                                    </td>
                                    <td>
                                        <p>Cours gradé - Espace Gambetta (20H - 22H)</p>
                                        <p className="fst-italic">(A partir de la 5ème corde)<br/>Prof. Pézão et Sorriso</p>
                                    </td>
                                    <td>-</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Container>
                <Container className="py-5">
                    <Col className="py-5">
                        <Row className="py-5">
                            <h1>Nos salles </h1>
                        </Row>
                        <Row className="py-5">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=First slide&bg=373940"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Third slide&bg=20232a"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Row>
                    </Col>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;