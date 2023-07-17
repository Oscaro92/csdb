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
import image from "../../img/DSC_6205.jpg"
import image1 from "../../img/DSC_6111.jpg"
import image2 from "../../img/DSC_6107.jpg"
import image3 from "../../img/DSC_6349.jpg"

// * build object
let profs = [
    {
        name: "Railson",
        picture: image,
        description: "Le maitre ultime",
        corde: adult16
    },
    {
        name: "Pezao",
        picture: image1,
        description: "Romain ou Pezao (grand pied) fait de la capoeira depuis plus de X ans",
        corde: adult11
    },
    {
        name: 'Sorriso',
        picture: image2,
        description: "David ou Sorriso (sourir) fait de la capoeira depuis plus de X ans",
        corde: adult11
    },
    {
        name: 'Brutal',
        picture: image3,
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


const markers_sa = [
    { markerOffset: -30, name: "Arrail d'Ajuda & Porto Seguro", coordinates: [-39.0929, -16.48705]},
    { markerOffset: 15, name: "São Paulo", coordinates: [-46.9249, -23.681] },
    { markerOffset: 15, name: "Minas Gerais", coordinates: [-48.09325, -15.7215] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.9416, -33.4721] },
    { markerOffset: -30, name: "Valparaíso & Vina del Mar", coordinates: [-71.5906, -33.0452] },
    { markerOffset: 15, name: "Temuco", coordinates: [-72.6439, -38.7290] },
    { markerOffset: -35, name: "Lima", coordinates: [-77.1525, -12.0262] },
    { markerOffset: -30, name: "Cusco", coordinates: [-71.9804, -13.5299] },
    { markerOffset: 15, name: "Arequipa", coordinates: [-71.5596, -16.4040] },
    { markerOffset: -30, name: "Puno", coordinates: [-70.0575, -15.8467] }
];

const markers_na = [
    { markerOffset: 15, name: "Santa Barbara", coordinates: [-119.7910, 34.3986] },
    { markerOffset: -30, name: "San Francisco", coordinates: [-122.4787, 37.7577] },
    { markerOffset: 15, name: "Washington", coordinates: [-77.0969, 38.8938] },
    { markerOffset: 15, name: "Québec", coordinates: [-71.5097, 46.8572] }
];

const markers_europe = [
    { markerOffset: 10, name: "Paris", coordinates: [2.2646, 48.8589] },
    { markerOffset: 5, name: "Boulogne s/ Mer", coordinates: [1.5855, 50.7303] },
    { markerOffset: -25, name: "Vienne", coordinates: [16.0682, 48.2204] },
    { markerOffset: 15, name: "San Miniato", coordinates: [10.8434, 43.6831] },
    { markerOffset: 10, name: "Milan", coordinates: [9.0953, 45.4628] },
    { markerOffset: -25, name: "Bolzano", coordinates: [11.3265, 46.4892] },
    { markerOffset: -25, name: "Amsterdam", coordinates: [4.8215, 52.3547] },
    { markerOffset: -25, name: "Lille", coordinates: [3.0056, 50.6311] },
    { markerOffset: 10, name: "Braga", coordinates: [-8.4526, 41.5473] },
    { markerOffset: 5, name: "Londres", coordinates: [-0.2664, 51.5287] },
    { markerOffset: 10, name: "Seville", coordinates: [-5.9962, 37.3754] }
];

export {
    profs,
    child_rope,
    adult_rope,
    markers_sa,
    markers_na,
    markers_europe
}