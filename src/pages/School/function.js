// * import image
import child1 from '../../img/corde_enfant/corde_enfant_1.png'
import child2 from '../../img/corde_enfant/corde_enfant_2.png'
import child3 from '../../img/corde_enfant/corde_enfant_3.png'
import child4 from '../../img/corde_enfant/corde_enfant_4.png'
import child5 from '../../img/corde_enfant/corde_enfant_5.png'
import child6 from '../../img/corde_enfant/corde_enfant_6.png'
import child7 from '../../img/corde_enfant/corde_enfant_7.png'
import child8 from '../../img/corde_enfant/corde_enfant_8.png'
import child9 from '../../img/corde_enfant/corde_enfant_9.png'
import child10 from '../../img/corde_enfant/corde_enfant_10.png'
import child11 from '../../img/corde_enfant/corde_enfant_11.png'
import child12 from '../../img/corde_enfant/corde_enfant_12.png'
import adult1 from '../../img/corde_adulte/corde_adulte_1.png'
import adult2 from '../../img/corde_adulte/corde_adulte_2.png'
import adult3 from '../../img/corde_adulte/corde_adulte_3.png'
import adult4 from '../../img/corde_adulte/corde_adulte_4.png'
import adult5 from '../../img/corde_adulte/corde_adulte_5.png'
import adult6 from '../../img/corde_adulte/corde_adulte_6.png'
import adult7 from '../../img/corde_adulte/corde_adulte_7.png'
import adult8 from '../../img/corde_adulte/corde_adulte_8.png'
import adult9 from '../../img/corde_adulte/corde_adulte_9.png'
import adult10 from '../../img/corde_adulte/corde_adulte_10.png'
import adult11 from '../../img/corde_adulte/corde_adulte_11.png'
import adult12 from '../../img/corde_adulte/corde_adulte_12.png'
import adult13 from '../../img/corde_adulte/corde_adulte_13.png'
import adult14 from '../../img/corde_adulte/corde_adulte_14.png'
import adult15 from '../../img/corde_adulte/corde_adulte_15.png'
import adult16 from '../../img/corde_adulte/corde_adulte_16.png'
import adult17 from '../../img/corde_adulte/corde_adulte_17.png'
// * ----------------------------------------------
import img_romain from "../../img/romain.jpg"
import img_sorriso from "../../img/sorriso.jpg"
import img_cynthia from "../../img/cynthia.JPG"
import img_julien from "../../img/julien.jpg"

// * build object
let profs = [
    {
        name: "Pézão",
        picture: img_romain,
        description: "Mon premier contact avec la capoeira vient par le jeu vidéo Tekken mais sans trop savoir ce que c’est et ce n’est qu’en juin 1999, alors âgé de 13 ans, que je «découvre» la capoeira en assistant au film «La Loi du Plus fort» avec Marc Dacascos. Je ne commence qu’en octobre 2000 lorsque s’ouvre à Suresnes un cours de capoeira du groupe Capoeira Sul da Bahia avec Zeca Paca (Graduado à l’époque) et où se trouve également Nuno, Mumia et Peninha qui étaient élèves alors. \n" +
            "Depuis je n’ai jamais arrêté et cette passion n’a fait que grandir.\n" +
            "Mon surnom m’a été donné pendant mes premières années. C’est Thierry (aujourd’hui membres du groupe Angá Capoeira) qui avait remarqué la taille de mes pieds (taille 46 à 15 ans…) et qui a suggéré à Zeca de me nommer Grand pied: Pézão.\n" +
            "Je pars pour la première fois au Brésil en 2005 à l’âge de 19 ans avec mon partenaire de toujours Pernalonga afin de connaitre ce pays et l’académie de notre maitre à Arraial d’Ajuda, un endroit magique!\n" +
            "Au retour de ce voyage nous apprenons néanmoins que les cours à Suresnes ferment et nous allons avec Pernalonga nous entrainer au Club 94 à St Maur Créteil avec Zeca. C’est là que je rencontre Sorriso, Rudy, José avec qui je passe la corde de gradé en 2006 ainsi que Ganga Zumba, Michou, Caroço entre autres. \n" +
            "En 2007, j’aide Mumia (Johann) à monter l’association Urban Sul da Bahia et nous ré-ouvrons des cours à Suresnes mais c’est à partir du départ de Zeca en 2008 que Sorriso, Rudy, Pernalonga et moi-même nous rejoignons Mumia.\n" +
            "Les années qui suivent sont des années de nombreux apprentissages au côté de Johann. Tant sur le plan pratique/technique de la capoeira que sur la pédagogie et l’organisation d’un travail.\n" +
            "En 2009 nous passons la corde de moniteur avec Sorriso et Rudy. \n" +
            "En 2012 nous créons l’association Nossa C.A.S.A.  et en 2014 je passe la corde d’instructeur. \n" +
            "A partir de la rentrée 2014, Mumia nous laisse la responsabilité, avec Sorriso, de continuer le travail à Suresnes. Mais nous restons en contact régulier. \n" +
            "En 2018, je passe Professeur stagiaire lors du mondial au Brésil et en 2022 j’obtiens le grade de Professeur après la cérémonie de la formatura (moment très spécial) en compagnie de mon camarade Sorriso. \n" +
            "La capoeira a changé complètement ma vie. Grâce à elle j’ai repoussé beaucoup de mes limites, j’ai appris une langue, j’ai découvert une culture, je me suis ouvert à la musique et j’apprendrais encore beaucoup d’autres choses grâce à elle dans les années à venir.\n",
        corde: adult11
    },
    {
        name: 'Sorriso',
        picture: img_sorriso,
        description: "Intéressé depuis toujours par le sport et les arts martiaux je découvre la capoeira en lisant le magazine Karaté Bushido et comme beaucoup de gens de l’époque le film «Only the Strong/La loi du plus fort» me fait une grande impression. Je choisis cette discipline car ce mélange entre art martial et artistique me plait beaucoup.   \n" +
            "A La rentrée 1999, je fais quelques cours d’essai avec un dénommé Pernalonga qui enseigne la capoeira angola mais cela ne me convient pas. Je continue à chercher une école qui enseignerait une capoeira plus proche de mes attentes et je trouves des cours au Club 94 à Saint-Maur-des-Fossés avec Zeca et j’intègre le groupe Sul da Bahia en 1999.\n" +
            "Je rencontre également mes ainés dans la capoeira: Peninha, Mumia, Nuno, Passarinho, Alpha et les voyants pratiquer la capoeira à un niveau élevé, je redouble de motivation pour m’entrainer encore plus. \n" +
            "Pendant ces années la ronde du dimanche à St-Maur devient un des lieux de rencontre incontournable de la capoeira parisienne et j’ai la chance de pouvoir connaitre plein de capoeiriste  différents avec des styles différents ce qui nourrit également ma capoeira. \n" +
            "Je reçois le surnom de Sorriso (sourire) de Mumia avec qui les débuts avait été un peu difficile. La tradition du surnom (apelido) dans la capoeira est parfois fait à vos dépens mais j’ai été conforté dans l’utilisation de ce surnom lorsque Nuno m’a présenté Mestre Sorriso (Personnage important de la capoeira en France) lors d’un baptême auquel nous nous étions rendu. Aujourd’hui, rare sont les gens qui m’appelle par mon vrai prénom.\n" +
            "Zeca était un professeur dur mais cela m’a permis d’évoluer sur l’aspect technique et musicale de la capoeira. \n" +
            "En 2008, après le départ de Zeca je choisis de rejoindre Mumia à Suresnes. En 2009, je passe moniteur et je pars pour le Brésil pour la première fois  pour la rencontre mondiale à Arraial d’Ajuda. Un de mes plus beau souvenir de capoeiriste.\n" +
            "Je continue mon apprentissage auprès de Mumia mon ancien professeur et mentor pour qui j’ai toujours beaucoup de considération à Suresnes. \n" +
            "Je commence à donner des cours tout d’abord aux adolescent puis après le départ de Mumia de l’association aux adultes et aux enfants. \n" +
            "Je passe instructeur lors du mondiale au Brésil en 2015 et professeur stagiaire en France en 2019.\n" +
            "Depuis 2021, je donne également des cours dans la Ville de Puteaux avec l’association Sportevent’s . En 2022 je participe une fois de plus au Mondial au Brésil et je reçois la corde de professeur formado et depuis septembre de la même année je dispense des cours dans les écoles primaires de Suresnes comme activité extrascolaire pour les enfants.\n",
        corde: adult11
    },
    {
        name: 'Cynthia',
        picture: img_cynthia,
        description: "Cynthia capoeiriste depuis plus de X années",
        corde: adult9
    },
    {
        name: 'Brutal',
        picture: img_julien,
        description: "Julien ou brutal (la brute) capoeiriste doux comme un agneau",
        corde: adult8
    }
]

const child_rope = [
    {
        name: '1° cordel branco ponta verde',
        image: child1
    },
    {
        name: '2° cordel branco ponta amarela',
        image: child2
    },
    {
        name: '3° cordel branco ponta azul',
        image: child3
    },
    {
        name: '4° cordel verde ponta branca',
        image: child4
    },
    {
        name: '5° cordel verde',
        image: child5
    },
    {
        name: '6° cordel verde ponta amarela',
        image: child6
    },
    {
        name: '7° cordel verde/amarelo ponta branca',
        image: child7
    },
    {
        name: '8° cordel verde amarelo',
        image: child8
    },
    {
        name: '9° cordel verde/amarelo ponta amarela',
        image: child9
    },
    {
        name: '10° cordel amarelo ponta branca',
        image: child10
    },
    {
        name: '11° cordel amarelo',
        image: child11
    },
    {
        name: '12° cordel amarelo ponta azul',
        image: child12
    }
]

const adult_rope = [
    {
        name: '1° cordel verde claro',
        image: adult1
    },
    {
        name: '2° cordel verde escuro uma volta',
        image: adult2
    },
    {
        name: '3° cordel verde escuro duas voltas',
        image: adult3
    },
    {
        name: '4° cordel verde/amarelo intremediario uma volta',
        image: adult4
    },
    {
        name: '5° cordel verde/amarelo intermediario duas voltas',
        image: adult5
    },
    {
        name: '6° cordel verde/amarelo oficial uma volta',
        image: adult6
    },
    {
        name: '7° cordel verde/amarelo oficial duas voltas',
        image: adult7
    },
    {
        name: '8° cordel amarelo - Monitor',
        image: adult8
    },
    {
        name: '9° cordel amarelo/azul - Instrutor',
        image: adult9
    },
    {
        name: '10° cordel azul/verde - Professor Estagiário',
        image: adult10
    },
    {
        name: '11° cordel azul - Professor Formado',
        image: adult11
    },
    {
        name: '12° cordel verde/amarelo/azul - ContraMestre',
        image: adult12
    },
    {
        name: '13° cordel verde/amarelo/azul/branco - Mestrando',
        image: adult13
    },
    {
        name: '14° cordel branco/verde - Mestre 1° grau',
        image: adult14
    },
    {
        name: '15° cordel branco/amarelo - Mestre 2° grau',
        image: adult15
    },
    {
        name: '16° cordel branco/azul - Mestre 3º grau',
        image: adult16
    },
    {
        name: '17° cordel branco - Mestre 4° grau',
        image: adult17
    }
]


const markers = [
    {name: "Arrail d'Ajuda & Porto Seguro", coordinates: [-16.48705, -39.0929], profs: [{name: "Mestre Railson", corde: adult16}, {name: "Test", corde: adult11}]},
    {name: "São Paulo", coordinates: [-23.681, -46.9249], profs: [] },
    {name: "Minas Gerais", coordinates: [-15.7215, -48.09325], profs: [] },
    {name: "Santiago", coordinates: [-33.4721, -70.9416], profs: [] },
    {name: "Valparaíso & Vina del Mar", coordinates: [-33.0452, -71.5906], profs: [] },
    {name: "Temuco", coordinates: [-38.7290, -72.6439], profs: [] },
    {name: "Lima", coordinates: [-12.0262, -77.1525], profs: [] },
    {name: "Cusco", coordinates: [-13.5299, -71.9804], profs: [] },
    {name: "Arequipa", coordinates: [-16.4040, -71.5596], profs: [] },
    {name: "Puno", coordinates: [-15.8467, -70.0575], profs: [] },
    {name: "Santa Barbara", coordinates: [34.3986, -119.7910], profs: [] },
    {name: "San Francisco", coordinates: [37.7577, -122.4787], profs: [] },
    {name: "Washington", coordinates: [38.8938, -77.0969], profs: [] },
    {name: "Québec", coordinates: [46.8572, -71.5097], profs: [] },
    {name: "Paris", coordinates: [48.8589, 2.2646], profs: [] },
    {name: "Boulogne s/ Mer", coordinates: [50.7303, 1.5855], profs: [] },
    {name: "Vienne", coordinates: [48.2204, 16.0682], profs: [] },
    {name: "San Miniato", coordinates: [43.6831, 10.8434], profs: [] },
    {name: "Milan", coordinates: [45.4628, 9.0953], profs: [] },
    {name: "Bolzano", coordinates: [46.4892, 11.3265], profs: [] },
    {name: "Amsterdam", coordinates: [52.3547, 4.8215], profs: [] },
    {name: "Lille", coordinates: [50.6311, 3.0056], profs: [] },
    {name: "Braga", coordinates: [41.5473, -8.4526], profs: [] },
    {name: "Londres", coordinates: [51.5287, -0.2664], profs: [] },
    {name: "Seville", coordinates: [37.3754, -5.9962], profs: [] }
];

export {
    profs,
    child_rope,
    adult_rope,
    markers
}