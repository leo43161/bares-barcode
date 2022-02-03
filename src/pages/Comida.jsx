import React, { useEffect } from 'react';
import ComidaList from '../components/ComidaList';
import { useLocation } from "wouter";
import { getMesa } from '../helpers/crudHelpers';
import Accordion from 'react-bootstrap/Accordion';
import useComida from '../hooks/useComida';
import useCategorias from '../hooks/useCategorias';

export default function Comida({ categoria, inputSearch }) {
    const { comidaFilter, comidaSearch, comidaSubFilter } = useComida();
    const [location, setLocation] = useLocation();
    const { subcategoriaFilter } = useCategorias();
    const comidas = inputSearch.trim() !== "" ? comidaSearch(inputSearch) : comidaFilter(categoria);
    const subcategorias = inputSearch.trim() !== "" ? [] : subcategoriaFilter(categoria);

    useEffect(() => {
        const mesaMatch = async () => {
            const _mesa = await getMesa(location.split("/")[1]);
            if (!_mesa) {
                setLocation("/error");
            } else if (!_mesa.disponible) {
                setLocation("/error");
            }
        }
        mesaMatch();
    }, [location, setLocation]);
    return (
        <div className="mt-2">
            {inputSearch.trim() !== "" ? <ComidaList comidas={comidas}></ComidaList> :
                <>
                    {subcategorias.length > 0 ? (
                        <Accordion className="pb-2" flush>
                            {subcategorias.map((value) => {
                                const comidaSub = comidaSubFilter(value._id);
                                return (
                                    <Accordion.Item eventKey={value._id} className="mb-3 bg-transparent border-0" key={value._id}>
                                        <Accordion.Header className="shadow h1"><span className="fw-bold">{value.titulo}</span></Accordion.Header>
                                        <Accordion.Body className="bg-transparent px-0 pb-1 pt-0">
                                            <ComidaList comidas={comidaSub}></ComidaList>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}

                        </Accordion>
                    ) : <ComidaList comidas={comidas}></ComidaList>}
                </>
            }
        </div>
    );
}
