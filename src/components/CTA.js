// * import library
import { Button, Modal } from 'react-bootstrap'
import React, {useState} from "react";

function CTA() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nos coordonnées</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="py-1">
                        <a href="tel:0615788058" className="text-decoration-none text-black"><i className="bi bi-telephone-fill text-black h6"></i> 06 15 78 80 58</a>
                    </div>
                    <div className="py-1">
                        <a href="mailto:nossacasa.asso@gmail.com" className="text-decoration-none text-black"><i className="bi bi-envelope-fill text-black h6"></i>  nossacasa.asso@gmail.com</a>
                    </div>
                    <div className="py-1">
                        <a href="https://goo.gl/maps/BZSm7o3auTMV8aBw8" target="_blank" className="text-reset text-decoration-none text-black"><i className="bi bi-geo-alt-fill text-black h6"></i> 65bis, Rue Gambetta 92150 SURESNES</a>
                    </div>
                    <div className="py-3">
                        <a href="https://www.facebook.com/associationnossacasa" target="_blank"><i className="bi bi-facebook text-black h3" alt="fb"></i></a>
                        <a href="https://instagram.com/suldabahiaparis?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="bi bi-instagram text-black h3 ms-2"></i></a>
                    </div>
                </Modal.Body>
            </Modal>
            <Button style={{border: "none"}} size="lg" className="btn btn-overlay btn-primary" onClick={handleShow}> Nous contacter </Button>
        </div>
    )
}

export default CTA