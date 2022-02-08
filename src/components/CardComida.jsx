import React, { useState } from 'react';
import ComidaModal from './ComidaModal';

export default function CardComida({ comida }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const { nombre, descripcion, estadoOferta, precio, oferta, imagen } = comida;
    return (
        <>
            <div className="col" onClick={handleShow}>
                <div className="overflow-hidden border-0 mt-3 shadow-sm card card-comida">
                    <img className="card-img-top" alt={nombre} src={"https://img-barcode.s3.sa-east-1.amazonaws.com/barcode/" + imagen}></img>
                    <div className="text-start card-body">
                        <div className="card-title h5">{nombre}</div>
                        <p className="text-truncate-3">{descripcion}</p>
                        <div className="d-flex justify-content-around px-2">
                            <span className={`${estadoOferta ? "text-decoration-line-through text-muted" : "text-decoration-underline primary-text fw-bold"}`}>$ {precio}</span>
                            {estadoOferta ? <span className="fw-bold primary-text text-decoration-underline">$ {oferta}</span> : null}
                        </div>
                    </div>
                </div>
            </div>
            <ComidaModal show={show} setShow={setShow} comida={comida}></ComidaModal>
        </>
    );
}
