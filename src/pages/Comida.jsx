import React from 'react';
import useComida from '../hooks/useComida';
import useMesas from '../hooks/useMesas';
import useCategorias from '../hooks/useCategorias';

export default function Comida({ categoria }) {
    const { comidaFilter } = useComida();
    const comida = comidaFilter(categoria);
    return (
        <div>
            {comida.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
