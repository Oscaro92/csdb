// * import lib
import React from "react";

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Card, Col, Container, Row} from "react-bootstrap";

// * import image
import bg from "../img/bg_event.JPG";
import event1 from "../img/event1.jpg";
import event2 from "../img/event2.jpg";
import event3 from "../img/event3.jpg";

const events = [
    {
        name: "Stage avec le Contra-Mestre Pézão (Arraial d'Ajuda BA)",
        date: "DU 17 JUIN 14:30 AU 18 JUIN 18:00 UTC+02",
        description: "Stage avec le Contra-Mestre Deividi (Pézão) au centre sportif des Raguidelles (27 Rue Tourneroches 92150 SURESNES)\n" +
            "Samedi 14h30 - 17h30 (mini dojo)\n" +
            "Dimanche 14h30 - 17h30 (grand dojo)\n" +
            "Tarif : 1 jours 15€ / 2 jours 20€",
        place: "Centre Sportif Des Raguidelles",
        image: event1
    },
    {
        name: "Batizado 2023",
        date: "DU 28 AVR. 20:30 AU 29 AVR. 18:00 UTC+02",
        description: "* Vendredi 28 avril 2023 :\n" +
            "20h30 à 22h\n" +
            "Lieu : Gymnase Arnaud Beltrame (Allée Arnaud Beltrame 92150 SURESNES)\n" +
            "- Ronde d’ouverture de l’évènement\n" +
            "*Samedi 29 avril 2023 :\n" +
            "Lieu : Gymnase des Raguidelles (27 Rue des Tourneroches 92150 SURESNES)\n" +
            "- 9h30-10h : Echauffement\n" +
            "- 10h-13h : Stages avec Mestre Railson et les professeurs présents (Adulte) / Stage avec les professeurs présent (Enfant)\n" +
            "- 13h-15h : Repas\n" +
            "- 15h-18h : Baptême et changement de grade\n" +
            "20h – 00h : Soirée à l’espace Gambetta (27 rue Gambetta 92150 SURESNES)\n" +
            "* Dimanche 30 avril 2023 :\n" +
            "Visite sur Paris avec nos invités et ronde improvisée\n" +
            "-------------------\n" +
            "* Friday April 28th 2023 :\n" +
            "20h30 to 22h\n" +
            "Place : Gymnase Arnaud Beltrame (Allée Arnaud Beltrame 92150 SURESNES)\n" +
            "- Opening Roda\n" +
            "*Saturday April 29th 2023 :\n" +
            "Place : Gymnase des Raguidelles (27 Rue des Tourneroches 92150 SURESNES)\n" +
            "- 9h30-10h : Warming Up\n" +
            "- 10h-13h : Workshop with Mestre Railson and invited professors (Adults) / Workshop with invited professors (Children)\n" +
            "- 13h-15h : Meal\n" +
            "- 15h-18h : Batizado\n" +
            "20h – 00h : Party at l’espace Gambetta (27 rue Gambetta 92150 SURESNES)\n" +
            "* Dimanche 30 avril 2023 :\n" +
            "Visit of Paris with our guests and street roda\n" +
            "-------------------\n" +
            "* Seixa Feira 28 de abril 2023 :\n" +
            "20h30 à 22h\n" +
            "Local : Gymnase Arnaud Beltrame (Allée Arnaud Beltrame 92150 SURESNES)\n" +
            "- Roda de abertura\n" +
            "*Sábado 29 de Abril 2023 :\n" +
            "Local : Gymnase des Raguidelles (27 Rue des Tourneroches 92150 SURESNES)\n" +
            "- 9h30-10h : Aquecimento\n" +
            "- 10h-13h : Workshop com Mestre Railson e os professores convidados (Adultos) / Workshop com professores convidados (Crianças)\n" +
            "- 13h-15h : Almoço\n" +
            "- 15h-18h : Batizado\n" +
            "20h – 00h : Festa no Espace Gambetta (27 rue Gambetta 92150 SURESNES)\n" +
            "* Domingo 30 de abril 2023 :\n" +
            "Passeio em Paris e roda de rua\n" +
            "\n" +
            "Tarif / Preço :\n" +
            "30 €",
        place: "Centre Sportif Des Raguidelles",
        image: event2
    },
    {
        name: "Roda du Mois",
        date: "SAMEDI 25 MARS 2023 DE 14:30 À 17:30 UTC+01",
        description: "Ronde du mois au centre sportif des raguidelles de 14h30 à 17h30.",
        place: "Centre Sportif Des Raguidelles",
        image: event3
    }
]

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}


const Event = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={style_image} className="p-5">
                    <Container className="p-5">
                        <Row className="p-5">
                            <Col className="p-5">
                                <h1 className="display-1 fw-bolder" style={{color: '#5EC198'}}>Evénement</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="p-5">
                    <Row className="pt-5">
                        <h1> A venir </h1>
                        <h5 className="pt-5"> Aucun événement à venir ! </h5>
                    </Row>
                </Container>
                <Container className="p-5">
                    <Row className="p-5">
                        <h1> Passé </h1>
                        {events.map((event) => (
                            <Col className="p-5">
                                <Card
                                    key={event.name}
                                    style={{ width: '25rem'}}
                                >
                                    <Card.Img variant="top" src={event.image}/>
                                    <Card.Body>
                                        <Card.Title>{event.name}</Card.Title>
                                        <Card.Text>{event.description}</Card.Text>
                                        <></>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{event.place}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Event;