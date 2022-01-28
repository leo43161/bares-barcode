import React from 'react';
import useComida from '../hooks/useComida';
import useMesas from '../hooks/useMesas';
import useCategorias from '../hooks/useCategorias';

export default function Comida() {
    const { comida } = useComida();
    const { mesas, mesaMatch } = useMesas();
    const { categorias, subcategorias } = useCategorias();
    console.log(subcategorias ? subcategorias : []);
    console.log(categorias ? categorias : []);
    console.log(comida ? comida : []);
    console.log(mesas ? mesas : []);
    console.log(mesaMatch("61b1fe1de0a49317eb8e84e0"))
    return (
        <div>
            {comida.map((value, idx) => (<div key={idx}>{value.nombre}</div>))}
        </div>
    );
}
