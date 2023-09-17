// * import library
import { Button, Modal } from 'react-bootstrap'
import React, {useState} from "react";
import call from "../img/call.svg";
import mail from "../img/mail.svg";
import pin from "../img/pin.svg";
import fb from "../img/icon-fb.png";
import insta from "../img/icons-insta.png";

function CAT() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nos coordonnées</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="py-1">
                        <a href="tel:0615788058" className="text-decoration-none text-black"><img src={call} width="20" height="20" /> 06 15 78 80 58</a>
                    </div>
                    <div className="py-1">
                        <a href="mailto:nossacasa.asso@gmail.com" className="text-decoration-none text-black"><img alt="mail" src={mail} width="20" height="20" />  nossacasa.asso@gmail.com</a>
                    </div>
                    <div className="py-1">
                        <a href="https://goo.gl/maps/BZSm7o3auTMV8aBw8" target="_blank" className="text-reset text-decoration-none"><img alt="pin" src={pin} width="20" height="20"  /> 65bis, Rue Gambetta 92150 SURESNES</a>
                    </div>
                    <div className="py-3">
                        <a href="https://www.facebook.com/associationnossacasa" target="_blank"><img alt="fb" src={fb} width="30" height="30" /></a>
                        <a href="https://instagram.com/suldabahiaparis?igshid=MzRlODBiNWFlZA==" target="_blank"><img alt="insta" src={insta} width="34" height="34" /></a>
                    </div>
                </Modal.Body>
            </Modal>
            <Button style={{background: '#044d24', border: "none"}} size="lg" className="btn-overlay" onClick={handleShow}> Nous contacter </Button>
        </div>
    )
}

export default CAT