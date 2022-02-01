import React from 'react';
import useComida from '../hooks/useComida';

export default function Comida({ categoria }) {
    const { comidaFilter } = useComida();
    const comida = comidaFilter(categoria);
    return (
        <div>
            {comida.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
