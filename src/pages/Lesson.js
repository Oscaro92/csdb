// * import lib
import React from "react";
import {Col, Container, Row, Carousel, Image} from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import frLocale from '@fullcalendar/core/locales/fr';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import googleCalendarPlugin from '@fullcalendar/google-calendar';


// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import CAT from '../components/CTA'

// * import image
import bg from "../img/bg_lesson.jpg"
import profs from "../img/profs.jpg"
import events from "../img/event.jpeg"
import salle1 from "../img/salle_belvedere.jpg"
import salle2 from "../img/salle_beltrame.jpg"
import salle3 from "../img/salle_raguidelles.jpeg"
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
            <div style={style_image} >
                <Container className="py-lg-5 py-sm-0">
                    <Row className="py-5">
                        <Col>
                            <h1 className="display-1 fw-bolder text-primary">Cours & Événements</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="py-lg-5 py-sm-0">
                <Row className="py-5">
                    <Col className="pb-5 pb-lg-0" sm={20} md={6}>
                        <Image className="rounded" src={profs} width="60%" fluid/>
                    </Col>
                    <Col  sm={20} md={6}>
                        <h1 className="display-5 fw-bolder">Cours adulte et enfant</h1>
                        <p className="py-3">La Capoeira est une modalité d’expression pluriforme mélangeant lutte,
                            danse, musique, chant, théâtralité, stratégie, culture etc.<br/>
                            <br/>
                            Nos cours s’intègrent dans la méthodologie, la pédagogie et la philosophie de l’école
                            Capoeira Sul da Bahia.<br/>
                            <br/>
                            Un cours de capoeira n’a pas de forme prédéfinie, il dépend de la vision de l’enseignant.
                            Néanmoins il est généralement composé d’un échauffement pour permettre de préparer le corps
                            à la pratique (échauffement musculo-articulaire, étirements), d’une partie abordant l’aspect
                            physique de la capoeira par le biais de répétition de mouvements (attaques, défenses,
                            déplacements, acrobaties etc.) isolés ou en séquences.<br/>
                            Le jeu de capoeira ne se pratiquant que par deux, ces mouvements sont travaillés souvent en
                            binôme.<br/>
                            Enfin en général, le cours se finit par une roda de capoeira où le capoeiriste cherche la
                            mise en pratique de ce qu’il a appris lors d’un jeu improvisé avec un autre partenaire, avec
                            l’accompagnement musical des autres participants (instruments de musique, paumes de mains et
                            chants).<br/>
                        </p>
                        <CAT></CAT>
                    </Col>
                </Row>
            </Container>
            <Container className="py-lg-5 py-sm-0">
                <Row className="py-5">
                    <Col className="pb-5 pb-lg-0" sm={20} md={6}>
                        <h1 className="display-5 fw-bolder">Evénements</h1>
                        <p className="py-3">
                            Nous organisons régulièrement des stages qui servent à aborder plus spécifiquement des
                            aspects de la capoeira en profitant de l’expérience d’autres intervenants nationaux ou
                            internationaux de notre école ou extérieur à celle-ci. <br/>
                            Nous organisons également des voyages permettant à nos adhérents d’apprendre d’autres
                            enseignants et de s’intégrer encore plus dans la « culture » de la capoeira.
                        </p>
                        <CAT></CAT>
                    </Col>
                    <Col sm={20} md={6}>
                        <Image className="rounded" src={events} width="75%"/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Col>
                    <Row>
                        <h1 className="pb-5 display-5 fw-bolder">Planning des cours et des événements</h1>
                    </Row>
                    <Row>
                        <FullCalendar
                            height={700}
                            initialView='timeGridWeek'
                            headerToolbar={{
                                start: "dayGridMonth timeGridWeek",
                                center: "title",
                                end: "prev,next"
                            }}
                            buttonIcons={{
                                prev: 'arrow-left-short',
                                next: 'arrow-right-short'
                            }}
                            titleFormat={{year: 'numeric', month: 'long'}}
                            locale={'fr'}
                            locales={[frLocale]}
                            themeSystem="bootstrap5"
                            plugins={[timeGridPlugin, dayGridPlugin, bootstrap5Plugin, googleCalendarPlugin]}
                            googleCalendarApiKey='AIzaSyDiEUNIZO4EZl0CHSHsT1QuHSuCfhZKDL0'

                            eventSources={[
                                {
                                    googleCalendarId: 'f91828ecfe96d0d4fd3c958b83d23763efbe4a9dad52cba2d8e6e3c9773e847b@group.calendar.google.com',
                                    color: '#fdf003',
                                    textColor: 'black',
                                    borderColor: 'black'
                                },
                                {
                                    googleCalendarId: 'ca901b9ed6a2addfa80a57f43aa1c98cd3a7af731f41c26e1878e5173f098db6@group.calendar.google.com',
                                    color: '#2d3091',
                                    textColor: 'white',
                                    borderColor: 'black'
                                },
                            ]}
                        />
                    </Row>
                </Col>
            </Container>
            <Container className="py-5">
                <Col className="py-5">
                    <Row className="py-5">
                        <h1 className="display-5 fw-bolder">Nos salles </h1>
                    </Row>
                    <Row className="py-5">
                        <Carousel>
                            {halls.map((hall) => (
                                <Carousel.Item>
                                    <a href={hall.url} className="text-reset text-decoration-none" target="_blank">
                                        <img
                                            className="img-fluid"
                                            src={hall.image}
                                            alt={hall.name}
                                        />
                                    </a>
                                    <Carousel.Caption>
                                        <h3>{hall.name}</h3>
                                        <p>{hall.address}</p>
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