// * import lib
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";

// * import component
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Col, Container, Row} from "react-bootstrap";
import bg from "../../img/bg_sdb.jpg";

// * import data
import { markers_sa, markers_na, markers_europe } from "./function"


// * css
const style_image = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
}

const geo_url_sa = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";
const geo_url_na = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";
const geo_url_europe = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

const SDB = () => {
    return (
        <div className="App">
            <Header></Header>
                <div style={style_image}>
                    <Container className="py-lg-5 py-sm-0">
                        <Row className="py-5">
                            <Col>
                                <h1 className="display-1 fw-bolder py-5" style={{color: '#044d24'}}>Capoeira Sul da Bahia dans le monde</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-5 fw-bolder py-5">Amérique du sud</h1>
                            <ComposableMap
                                projection="geoAzimuthalEqualArea"
                                projectionConfig={{
                                    rotate: [60, 22, 0],
                                    scale: 500
                                }}
                            >
                                <Geographies geography={geo_url_sa}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#EAEAEC"
                                                stroke="#5D5A6D"
                                            />
                                        ))
                                    }
                                </Geographies>
                                {markers_sa.map(({ name, coordinates, markerOffset }) => (
                                    <Marker key={name} coordinates={coordinates}>
                                        <g
                                            fill="none"
                                            stroke="#1f8a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            transform="translate(-12, -24)"
                                        >
                                            <circle cx="12" cy="10" r="3" />
                                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={markerOffset}
                                            style={{fill: "#000000" }}
                                        >
                                            {name}
                                        </text>
                                    </Marker>
                                ))}
                            </ComposableMap>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="display-5 fw-bolder py-5">Amérique du nord</h1>
                            <ComposableMap
                                projection="geoAzimuthalEqualArea"
                                projectionConfig={{
                                    rotate: [90, -45, 0],
                                    scale: 400
                                }}
                            >
                                <Geographies geography={geo_url_na}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#EAEAEC"
                                                stroke="#5D5A6D"
                                            />
                                        ))
                                    }
                                </Geographies>
                                {markers_na.map(({ name, coordinates, markerOffset }) => (
                                    <Marker key={name} coordinates={coordinates}>
                                        <g
                                            fill="none"
                                            stroke="#1f8a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            transform="translate(-12, -24)"
                                        >
                                            <circle cx="12" cy="10" r="3" />
                                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={markerOffset}
                                            style={{fill: "#000000" }}
                                        >
                                            {name}
                                        </text>
                                    </Marker>
                                ))}
                            </ComposableMap>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="display-5 fw-bolder py-5">Europe</h1>
                            <ComposableMap
                                projection="geoAzimuthalEqualArea"
                                projectionConfig={{
                                    rotate: [-10.0, -53.0, 0],
                                    scale: 600
                                }}
                            >
                                <Geographies geography={geo_url_europe}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#EAEAEC"
                                                stroke="#5D5A6D"
                                            />
                                        ))
                                    }
                                </Geographies>
                                {markers_europe.map(({ name, coordinates, markerOffset }) => (
                                    <Marker key={name} coordinates={coordinates}>
                                        <g
                                            fill="none"
                                            stroke="#1f8a5f"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            transform="translate(-12, -24)"
                                        >
                                            <circle cx="12" cy="10" r="3" />
                                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={markerOffset}
                                            style={{fill: "#000000", fontSize: "14px"}}
                                        >
                                            {name}
                                        </text>
                                    </Marker>
                                ))}
                            </ComposableMap>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default SDB;