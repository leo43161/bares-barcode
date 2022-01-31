import React from 'react';
import CardCategorias from '../components/CardCategorias';

export default function Categorias() {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="g-4 mt-1 row row-cols-md-3 row-cols-2 w-100">
                <CardCategorias></CardCategorias>
                <CardCategorias></CardCategorias>
                <CardCategorias></CardCategorias>
                <CardCategorias></CardCategorias>
            </div>
        </div>
    );
}
