import React from 'react';
import CardCategorias from '../components/CardCategorias';
import useCategorias from '../hooks/useCategorias';

export default function Categorias() {
    const { categorias } = useCategorias();
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="g-4 mt-1 row row-cols-md-3 row-cols-2 w-100">
                {categorias.map((value, idx) => (
                    <div key={idx}>
                        <CardCategorias categoria={value}></CardCategorias>
                    </div>
                ))}
            </div>
        </div>
    );
}
