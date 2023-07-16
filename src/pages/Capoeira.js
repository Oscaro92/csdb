// * import lib
import React from "react";

// * import component
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Col, Container, Row, Image} from "react-bootstrap";

// * import image
import bg from "../img/event2.jpg";
import image1 from "../img/cabral.jpg";
import image2 from "../img/rugendas_sm.jpg";
import image3 from "../img/rug2.jpg";
import bimba from "../img/bimba.jpg";
import pastinha from "../img/pastinha.jpg";

// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const Capoeira = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={style_image}>
                    <Container className="py-5">
                        <Row className="py-5">
                            <Col className="py-5">
                                <h1 className="py-5 display-1 fw-bolder" style={{color: "#5EC198"}}>La capoeira</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row className="pt-5">
                        <h1 className="display-5 fw-bold">"Petite" histoire de la Capoeira </h1>
                        <Col sm={4} className="pt-5 text-start fs-5">
                            <p>En 1500, Pedro Alvares Cabral découvre le Brésil. Il débarque dans un petit port naturel, qu’il baptisa Porto Seguro (port sûre), dans l’actuel état de Bahia. Au nom de la couronne portugaise, il prend possession de la Terra de Santa Cruz (Terre de la Sainte Croix), le nom Brésil n’étant apparu plus tard lors de la colonisation du pays par les portugais.</p>
                        </Col>
                        <Col sm={8} className="pt-5">
                            <Image src={image1} height="75%"/>
                        </Col>
                    </Row>
                    <Row className="text-start fs-5">
                        <p>Les activités économiques de la grande colonie, fondées essentiellement sur l’agriculture – exploitation du bois-Brésil, plantations de canne à sucre, de coton, et plus tard de tabac et café – sont de grandes consommatrices de main d’œuvre. Les esclaves africains furent envoyés au Brésil, dans les plantations, nourrir une machine économique que la population indigène, migrante, occupée à des guerres tribales, victime des épidémies apportées par les colons, ou au service des intérêts jésuites, ne pouvait faire tourner.</p>
                        <p>Le document le plus ancien relatif à l’importation d’esclaves au Brésil date du 29 mars 1559. Signé par le roi Dom João III, il autorise que soient déportés des hommes depuis l’île de São Tomé et la Guinée qui, à cette époque, s’étend du Sénégal au Congo.</p>
                        <p>Enfin, En 1890, à peine plus d’un an après l’abolition de l’esclavage, Rui Barbosa, Ministre des Finances (Fazenda), décide de détruire toutes les archives qui se rapportent à l’esclavage. Officiellement, le but de cette opération, malheureuse pour les historiens, était de tirer un trait sur cette histoire infâmante, de donner à la nation brésilienne un nouveau départ, fondé sur la liberté et l’oubli de l’esclavagisme. Elle anéantissait, du même coup, les prétentions des propriétaires « spoliés » par l’abolition, à une quelconque indemnité.</p>
                        <p>Cette décision n’affecte pas outre mesure la capoeira, dont les acteurs n’en furent pas les rédacteurs : le Brésil était alors analphabète à 80%, et de plus, les gens de lettres ne s’intéressèrent pas aux loisirs des Noirs avant le XIXème siècle.</p>
                        <p>La polémique peut alors s’installer : la capoeira fut-elle importée d’Afrique, spécifiquement d’Angola, ou est-elle née au Brésil ?</p>
                        <p>Sur ces débuts force est de reconnaître que l’on sait peu de choses. La première mention du terme «capoeira» remonte à 1595. Dans son livre de grammaire, le père jésuite José de Anchieta écrit «les indiens Tupi-Guaranis s’amusaient jouant la capoeira», sans que l’on sache avec plus de précision de quel type de divertissement il s’agissait. De plus, une des théories sur l’étymologie du terme capoeira voudrait que celui-ci soit d’origine Tupi, et qu’il signifie «îlot de forêt coupée», «clairière de repousse». Cependant, il est peu probable que le jeu soit d’origine indigène.</p>
                        <p>Il est avéré que beaucoup d’esclaves vinrent d’Angola, par les ports de São Paulo de Luanda et de Benguela. De plus, une danse appelé N’Golo ou Danse du Zèbre pratiqué en Angola, présente des similitudes avec la capoeira.</p>
                        <p>Il est vraisemblable que ces esclaves angolais ont inventé la capoeira au Brésil, à partir d’élément existant dans leur pays d’origine. Cela expliquerait les fréquentes références à ce pays. D’autre part, des disciplines parentes existent dans d’autres parties du monde qui n’eurent pas de contact avec le Brésil colonial (Cuba, Antilles, Réunion et Madagascar) mais partagent une histoire commune de déportation massive en provenance d’Afrique australe.</p>
                        <p>Une fois réglée l’hypothèse la plus probable de son origine géographique, le mystère de son développement reste entier…</p>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <h2 className="display-5 pb-3">Le Brésil Colonial 1500 – 1822</h2>
                        <p className="fst-italic">Quelques idées fausses…</p>
                        <p>Les Noirs auraient développé la capoeira, nous dit-on, comme un système de défense, utilisant leur corps parce qu’ils n’avaient pas d’armes, privilégiant le mouvements proches du sol pour se cacher aux regards des maîtres et parce qu’ils étaient entravés de lourde chaînes. Une pratique nocturne… au son des chants et des tambours ?!</p>
                        <p>Il est évident que les esclaves avaient accès à des armes (couteaux, machettes bêches…) et qu’ils ne vivaient pas enchaînés à l’intérieur de camps. On imagine pas que ceux cultivants la canne à sucre, notamment, coupaient les plants avec les dents.</p>
                        <p>Du reste, nous n’avons aucun autre éléments sur la capoeira à cette période.</p>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <h2 className="display-5 pb-3">Le Brésil Colonial 1500 – 1822</h2>
                        <p>Durant toute la période impériale, les capoeiras, occupent un rôle de plus en plus important dans la vie du pays. Des gangs, appelés maltas de capoeira, se structurent en ville et vont participer à donner une mauvaise image de la capoeira en troublant régulièrement l'odre public (affrontements, dégâts, etc.)</p>
                        <p>La capoeira telle qu'elle est décrite par les voyageurs étrangers est complètement différente de la forme angola, pourtant dite originale, que nous connaissons actuellement.</p>
                        <Col>
                            <p className="fst-italic">« Les Noirs ont encore un autre jeu guerrier, beaucoup plus violent, le Jogar capoeira : deux champions se précipitent l'un sur l'autre, et cherchent à frapper de leur tête la poitrine de l'adversaire qu'ils veulent renverser. C'est par des sauts de côté, ou par des parades également habiles qu'on échappe à l'attaque ; mais en s'élançant l'un contre l'autre, à peu près comme les boucs, ils se heurtent quelquefois fort rudement la tête : aussi voit-on souvent la plaisanterie faire place à la colère, si bien que les coups et même les couteaux ensanglantent le jeu.  »</p>
                            <p> Johann Mauritz Rugendas, peintre-voyageur autrichien, tiré de Voyage pittoresque au Brésil, paru en 1835.</p>
                        </Col>
                        <Col>
                            <Image src={image2}/>
                        </Col>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <Col>
                            <Image src={image3}/>
                        </Col>
                        <Col>
                            <p className="fst-italic">« Le samedi soir après le dernier travail de la semaine, et les jours de fête qui donnent chômage et repos, les noirs ont une heure ou deux de veillée pour les danses. Ils seréunissent en leur terreiro s'appellent, se groupent, s'agacent et les marches s'ouvrent. Ici c'est la capoeira, espèce de danse Pyrrhique, aux évolutions hardies de combat, que règle le tambour du Congo ; là c'est le Batuque, poses froides ou lascives qu'accélèrent ou contient l'Urucungo viole (autre nom du Berimbau) à cordes maigres ; plus loin c'est une danse folle où le regard, les seins et les hanches provoquent, c'est une espèce de convulsion enivrée qu'on appelle le Lundú. ».</p>
                            <p> Johann Mauritz Rugendas, peintre-voyageur autrichien, tiré de Voyage pittoresque au Brésil, paru en 1835.</p>
                        </Col>
                        <p className="pt-3">Sur ces peintures nous pouvons remarquer l’absence du Berimbau et l’utilisation du tambour à la place de l’atabaque et la description du jeu ne fait pas état de la ginga.</p>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <h2 className="display-5 pb-3">La République de 1889 à nos jours</h2>
                        <p className="fst-italic">De la répression à la légitimité...</p>
                        <p>Prendre le contrôle politique de la capitale (alors Rio de Janeiro) signifiait détruire les maltas de capoeiras. L' "épuration" commence au lendemain du coup d'état républicains du 15 novembre 1889.</p>
                        <p>En effet, le Code pénal de la République des Etats-Unis du Brésil établit par le décret n°847 du 11 octobre 1890, annonce aux articles 402 à 404 que : "faire démonstrations ou usage dans les rues ou sur les places publiques, des mouvements d'agilité ou de dextérité corporelle connue sous le nom de Capoeiragem, [...] : sera passible le contrevenant de deux à six mois de prison et d'une amende. Les chefs se verront infliger une peine double. En cas de récidive, il sera appliqué la peine maximale..."</p>
                        <p>Les déportations au bagne de l'île de Fernando de Noronha, aux travaux forcés dans la colonie militaire de Boa Vista (Paraiba), voire en Afrique, permettent de vider définitivement de la ville les capoeirisites. Pour un temps, la capoeira disparut peu ou prou de Rio. Les persécutions avaient eu pratiquement raison de cet art forgé par des siècles d'esclavages. Elle survécut dans la ville de Salvador et la région alentour (le Recôncavo). Sans doute l'éloignement de Rio a joué en faveur d'une répression moins active.  Toujours est-il que c'est à Salvador que la capoeira renait grâce à l'apport de deux figures emblématique de la capoeira que sont : Mestre Bimba et Mestre Pastinha </p>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <h2 className="display-5 pb-3">Mestre Bimba (1900 - 1974)</h2>
                        <Col sm={8}>
                            <p>Manoel dos Reis Machado nait le 23 novembre 1900 à Salvador de Bahia. Sont surnom "Bimba" qui signifie "zizi" est le résultat d'un pari entre sa mère et la sage-femme, sa mère pensait que ce serait une fille et la sage-femme un garçon. A l'accouchement, la mère demanda qui avait gagné le pari et la sage-femme lui répondit "C'est un bimba, Madame Martinha". Fils de Luis Cândido Machado, champio de Batuque (danse et lutte régionale), il aurait été initié des 1912 à la capoeira par Bentinho un capitaine de la Compagnie de Navigation Bahianaise. Par la suite il donna des cours pendant 10 ans avant de crée en 1932 sa première Académie. A l'époque la capoeira est toujours frappée d'illégalité. La capoeira est interdite dans les lieux publics, en revanche la loi n'interdit pas qu'elle soit pratiquée dans un espace privé. Mestre Bimba sort la capoeira de la rue et la développe dans son Académie et n'est donc pas inquieté par la justice.</p>
                        </Col>
                        <Col sm={4}>
                            <Image src={bimba}/>
                        </Col>
                        <p>L'apport de Mestre Bimba à la capoeira est énorme. Il lui donne une nouvelle image et contribue à la rendre populaire en faisaint des démonstrations avec ses élèves. Il la révoutionne totalement en créant ce qui deviendra le style appelé "Regional". En effet, Mestre Bimba trouve que la capoeira n'est pas assez efficace. Il décide donc de la mixer avec le Batuque. Il s'inspire également d'autres art martiaux asiatiques,  mais également de  la savate. Des arts martiaux asiatiques il apportera le système des cordes pour marquer la graduation. Il sort la capoeira du sol et la rend aérienne. Il place la ginga comme base de la capoeira et introduit le berimbau comme instrument roi de la capoeira (souvenons nous que son usage n'était pas systématique cf. ci-dessus). Il crée, également, une méthode d'enseignement complète comprenant des techniques appelé sequência (séquence). En modifiant la perception sulfureuse dont souffrait la capoeira il parvient à en faire un sport à part entière et ainsi à toucher toutes les couches de la société.</p>
                        <p>En 1953, la capoeira est reconnue officiellement par le président Gétulio Vargas qui la déclare "unique sport véritablement national". La capoeira n'est plus interdite. Cependant, Mestre Bimba malgré son travail, connait des problèmes financiers. Il part pour Goiânia en 1973 en quête de plus de reconnaissance et d'une vie meilleur. Il meurt l'année suivante le 5 février 1974. Enterré à Goiânia ses restes mortuaires furent ramené à Salvador, sa ville, le 20 juillet 1978 dans le cimetière de Campo Santo.</p>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <h2 className="display-5 pb-3">Mestre Bimba (1900 - 1974)</h2>
                        <Col sm={4}>
                            <Image src={pastinha}/>
                        </Col>
                        <Col sm={8}>
                            <p>Vincente Ferreira Pastinha nait à Salvador le 5 avril 1889. Il commence la capoeira à l'age de 10 ans avec un noir du nom de benedito, un ancien esclave. En 1935, fort du succès de la première académie de capoeira de Mestre Bimba, Mestre Pastinha ouvre son académie appelée : "Centre sportif de Capoeira Angola". Mestre Pastinha, pense que Mestre Bimba a trop changer la capoeira et qu'il faut la préserver dans son état "originel". Son travail connait à son tour un renommée nationale et internationale. Il est représente le Brésil au 1° festival des arts noirs à Dakar en 1966. Cependant, à la fin de sa vie il connait des problèmes semblables à ceux de Mestre Bimba. En effet, son académie est saisie par "Fondation du Patrimoine" et est transformé en restaurant administratif. Mestre Pastinha décèdera le 13 novembre 1981 à la suite d'un arrêt cardiaque, pauvre, malgré l'apport incroyable qu'il a fourni au Brésil et à la culture afro-brésilienne. </p>
                        </Col>
                    </Row>
                    <Row className="py-5 text-start fs-5">
                        <p>L'héritage de ces deux maîtres a traversé les années jusqu'à notre époque. La capoeira est aujourd'hui présente dans le monde entier, portée par d'autres maîtres (Mestre Mão Branca, Mestre Barrão, Mestre Camisa, Mestre Paulão Céara, Mestre Paulinho Sabia, Mestre Peixinho, Mestre Ramos...). La capoeira n'a cessé de se développer, s'enrichissant de l'apport de tous les élèves pratiquant cet art à travers le monde, rendant un vibrant hommage à ces deux "pères fondateurs" ainsi qu'à la culture afro-brésilienne.</p>
                        <p>A suivre... </p>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Capoeira;