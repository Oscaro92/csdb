// * import library
import { Button, Modal } from 'react-bootstrap'
import React, {useState} from "react";

function CAT() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>Test aussi mais un peu plus long. </Modal.Body>
            </Modal>
            <Button style={{background: '#5EC198', border: "none"}} size="lg" className="btn-overlay" onClick={handleShow}> Nous contacter </Button>
        </div>
    )
}

export default CAT