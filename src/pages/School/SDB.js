// * import lib
import React, {useState} from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps"

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Modal, Row, Image} from "react-bootstrap";
import bg from "../../img/bg_sdb.jpg";

// * import data
import {markers} from "./function"
import mestre from "../../img/mestre_railson.jpg";

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const SDB = () => {
    const [show, setShow] = useState(false);
    const [keySelect, setKeySelect] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (key) => {
        setShow(true);
        setKeySelect(key)
    }

    return (
        <div className="App">
            <Header></Header>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{markers[keySelect].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <ul>
                                        {markers[keySelect].profs.map((value) => (
                                            <>
                                                <li>{value.name}</li>
                                                <Image className="w-75" src={value.corde} fluid />
                                            </>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
                <div style={style_image}>
                    <Container className="py-lg-5 py-sm-0">
                        <Row className="py-5">
                            <Col>
                                <h1 className="display-1 fw-bolder py-5 text-primary">Sul da Bahia</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Col>
                        <Row>
                            <h1 className="display-5 fw-bolder py-5">Capoeira Sul da Bahia dans le monde</h1>
                        </Row>
                        <Row>
                            <Col md={20} lg={6} >
                                <p>
                                    Le Groupe Capoeira Sul da Bahia est le fruit de la vision, de la volonté et de l’expérience de son fondateur: Mestre Railson.<br/>
                                    Railson do Carmo Domingues nait le 15 octobre 1967, à Arraial d’Ajuda , petit village de pêcheurs, du sud de l’état de Bahia dans la municipalité de Porto Seguro.<br/>
                                    Il connait la Capoeira à l’âge de 11 ans lorsque son père l’emmène à un cours. Cette démarche, qui changera la vie de Railson est d’autant plus remarquable qu’à cette époque, la capoeira, bien que dépénalisée depuis les années 1930 est toujours très mal vue et les parents préfère voir leurs enfants faire du karaté ou du football plutôt que de la capoeira.<br/>
                                    Railson prend ses premiers cours avec le maître Estrela, à Porto Seguro. Le jeune Railson est très motivé car à cette époque la traversée du Rio Buranhém qui sépare Arraial de Porto Seguro ne s’effectuait pas comme aujourd’hui avec le bac (Balsa). Il s’était s’arrangé avec un pécheur pour faire la traversée avec lui sur sa pirogue.Après quelques mois de cours, Mestre Estrela part et l’académie ferme. Railson continue a s’entrainer seul et avec quelques camarades qui deviendront ses premiers élèves. Ils s’entrainent où ils peuvent: à la plage, dans les jardins, devant les maisons etc.<br/>
                                    A 12 ans son père meurt assassiné. Railson étant l’ainé de sa fratrie, il doit travailler pour subvenir aux besoins de sa famille. La capoeira devient sa passion, son échappatoire dans ces moments difficiles. Il s’entraine tout le temps, dès qu’il le peut. Le matin très tôt avant d’aller travailler et le soir après le travail.<br/>
                                    Le temps passe et sa passion reste intacte. Néanmoins, il ressent le besoin de trouver un maitre, quelqu’un qui le guiderait et lui apporterait des connaissances. Il voyage vers Salvador la capitale de l’Etat de Bahia et berceau de la capoeira Regional et Angola. Mais la capoeira qu’il voit lors de ce voyage ne lui convient pas.<br/>
                                    Lors d’un voyage chez un cousin dans la ville de Belo Horizonte située dans l’état du Minas Gerais, il rencontre lors d’une ronde sur la Praça da Liberdade celui qui deviendra son maitre: William Douglas Guimaraes, plus connu sous le nom de Mestre Mao Branca.<br/>
                                    Fasciné par la capoeira de Mestre Mão Branca et l’organisation de son travail intègre le groupe Capoeira Gerais en 1986.<br/>
                                    En 1987, il inaugure dans le centre-ville d’Arraial d’Ajuda, sa première académie, et qui est encore à ce jour le siège central du groupe. Au sein du groupe Capoeira Gerais, Railson passa par tous les stades de l’apprentissage jusqu’à obtenir le titre de Maître en 1995.<br/>
                                    Peu de temps après, il est autorisé à créer sa propre école toujours affiliée au groupe de son maitre qu’il baptise Grupo Capoeira Sul da bahia.<br/>
                                    Le groupe, après s’être développé dans un premier temps dans les villes voisines comme Porto Seguro, Trancoso, Santa Cruz Cabralia et même à São Paulo dans le sud du Brésil, s’exporte à l’international à la fin des années 1990, début des année 2000.<br/>
                                    Ce sont les premiers élèves gradés de Railson qui partent s’installer au Chili d’abord avec Cacau puis Maxuel et Zequinha, en France avec Zeca Paca, Au Canada avec João de Deus, en Italie avec Pedro et Som.<br/>
                                    Puis le groupe connait un développement exponentiel et est à présent implantés dans 16 pays. Aujourd’hui en France et au Chili, les professeurs brésiliens sont partis mais une génération de professeur locaux à repris le flambeau et ce sont à présent les élèves des élèves de Railson qui participe au développement et au rayonnement de l’école Capoeira Sul da Bahia.<br/>
                                    En 2025, après 30 années en tant que Maitre de Capoeira. Mestre Railson recevra le grade de Grao-Mestre, dernier grade de notre école. Venant récompenser son parcours, sa passion et sa détermination pendant toute ces années.<br/>

                                </p>
                            </Col>
                            <Col>
                                <Image className="rounded" src={mestre} fluid/>
                            </Col>
                        </Row>
                        <Row>
                            <h1 className="display-5 fw-bolder py-5">Capoeira Sul da Bahia dans le monde</h1>
                        </Row>
                        <Row>
                            <Map height={600} defaultCenter={[48.8589, 0.2646]} defaultZoom={3}>
                                {markers.map((data, key) => (
                                    <Marker width={50} anchor={data.coordinates} color="#044d24" onClick={() => handleShow(key)}/>
                                ))}
                                <ZoomControl />
                            </Map>
                        </Row>
                    </Col>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default SDB;