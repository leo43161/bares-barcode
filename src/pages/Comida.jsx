import React from 'react';
import ComidaList from '../components/ComidaList';
import Accordion from 'react-bootstrap/Accordion';
import useComida from '../hooks/useComida';

export default function Comida({ categoria }) {
    const { comidaFilter } = useComida();
    const comidas = comidaFilter(categoria);
    return (
        <div className="mt-2">
            <Accordion className="pb-2" flush>
                <Accordion.Item eventKey={1} className="mb-3 bg-transparent border-0" key={1}>
                    <Accordion.Header className="shadow h1"><span className="fw-bold">{"titulo"}</span></Accordion.Header>
                    <Accordion.Body className="bg-transparent px-0 pb-1 pt-0">
                        <ComidaList comidas={comidas}></ComidaList>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <ComidaList comidas={comidas}></ComidaList>
            {comidas.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
