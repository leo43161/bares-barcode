import React from 'react';
import useComida from '../hooks/useComida';
import useCategorias from '../hooks/useCategorias';

export default function Comida() {
    const { comida } = useComida();
    const { categorias } = useCategorias();
    console.log(categorias ? categorias : []);
    console.log(comida ? comida : []);
    return (
        <div>
            {comida.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
