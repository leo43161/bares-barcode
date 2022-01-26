import React from 'react';
import useComida from '../hooks/useComida';

export default function Comida() {
    const { comida } = useComida();
    console.log(comida ? comida : []);
    return (
        <div>
            {comida.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
