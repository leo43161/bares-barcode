import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function ComidaModal({ show, setShow, comida }) {
    const handleClose = () => setShow(false);
    const { nombre, descripcion, estadoOferta, precio, oferta, imagen } = comida;

    return (
        <>
            <Modal show={show} className="modal-comida barcode my-2 my-md-0 d-flex d-md-block justify-content-center align-items-center" onHide={() => handleClose()}>
                <Modal.Body className="d-flex flex-column align-items-center p-0 m-0" >
                    <div className="w-100">
                        <CloseButton onClick={() => handleClose()} className="position-absolute position-absolute top-0 end-0 p-3" />
                        <img src={"https://img-barcode.s3.sa-east-1.amazonaws.com/barcode/" + imagen} className="img-fluid w-100 rounded-top" alt={`${imagen}`} />
                    </div>
                    <div className="col-9 d-flex flex-column align-items-center">
                        <h1 className="mt-2 primary-text mb-2 text-menu-title text-center py-1">{nombre}</h1>
                        <p className="fw-bold">{descripcion}</p>
                        <div className="d-flex justify-content-around w-100">
                            <div className="text-center">
                                <h2 className={`text-menu-title ${estadoOferta ? "text-disabled" : ""}`}>Precio:</h2>
                                <h5 className={estadoOferta ? "text-disabled text-decoration-line-through" : ""}>${precio}</h5>
                            </div>
                            {estadoOferta ? <div className="text-center">
                                <h2 className="text-menu-title">Oferta:</h2>
                                <h5>${oferta}</h5>
                            </div> : null}

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
