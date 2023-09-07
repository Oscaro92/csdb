// * import lib
import React from "react";
import {Col, Container, Row, Carousel} from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import frLocale from '@fullcalendar/core/locales/fr';
import iCalendarPlugin from '@fullcalendar/icalendar';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import CAT from '../components/CTA'

// * import image
import bg from "../img/bg_lesson.jpg"
import profs from "../img/profs.jpg"
import salle1 from "../img/salle_belvedere.jpg"
import salle2 from "../img/salle_beltrame.jpg"
import salle3 from "../img/salle_raguidelles.jpg"
import salle4 from "../img/salle_gambetta.jpg"
import salle5 from "../img/salle_cogedim.jpg"

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const halls = [
    {
        name: "Gymnase du Belvédère",
        address: "65Bis Rue Gambetta 92150 SURESNES",
        image: salle1,
        url: "https://goo.gl/maps/oQda6jmysWSsyU6c6"
    },
    {
        name: "Gymnase Beltrame",
        address: "Allée Beltrame 92150 SURESNES",
        image: salle2,
        url: "https://goo.gl/maps/HSzZxKkj7AHsdHcj8"
    },
    {
        name: "Centre sportif des raguidelles",
        address: "27 Rue Tourneroches 92150 SURESNES",
        image: salle3,
        url: "https://goo.gl/maps/zmJnmpmUVzeHWrNq9"
    },
    {
        name: "Espace Gambetta",
        address: "27  Rue Gambetta 92150 SURESNES",
        image: salle4,
        url: "https://goo.gl/maps/7c6Gvd4suVCcm2DJ7"
    },
    {
        name: "Cogedim Club",
        address: "25 Rue Auguste Blanche 92800 PUTEAUX",
        image: salle5,
        url: "https://goo.gl/maps/bpsfoPeDQPuTujSX8"
    }
]

const Lesson = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={style_image} className="py-5">
                    <Container className="py-5">
                        <Row className="py-5">
                            <Col className="py-5">
                                <h1 className="display-1 fw-bolder" style={{color: '#5EC198'}}>Cours & Événements</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row className="py-5">
                        <Col>
                            <h1>Cours adulte et enfant</h1>
                            <p className="py-3">Cours avec Romain et David </p>
                            <CAT></CAT>
                        </Col>
                        <Col>
                            <img src={profs} width="65%"/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Col>
                        <Row>
                            <h1 className="pb-5">Planning des cours et des événements</h1>
                        </Row>
                        <Row>
                            <FullCalendar
                                height="auto"
                                //contentHeight="auto"
                                initialView='dayGridWeek'
                                headerToolbar={{
                                    start: "prev",
                                    center: "title",
                                    end: "next"
                                }}
                                titleFormat={{ year: 'numeric', month: 'long' }}
                                locale={'fr'}
                                locales={[frLocale]}
                                themeSystem="bootstrap5"
                                plugins={[daygridPlugin, iCalendarPlugin, bootstrap5Plugin]}
                                events={{ url: 'https://calendar.google.com/calendar/ical/f91828ecfe96d0d4fd3c958b83d23763efbe4a9dad52cba2d8e6e3c9773e847b%40group.calendar.google.com/private-943925c297b0ac103529dd018dd4158c/basic.ics', format: 'ics'}}
                            />
                            <div id="calendar"></div>
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
                                {halls.map((hall) => (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={hall.image}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>{hall.name}</h3>
                                            <a href={hall.url} className="text-reset text-decoration-none" target="_blank"><p>{hall.address}</p></a>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Row>
                    </Col>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;