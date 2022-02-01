import React from 'react';
import Masonry from 'react-masonry-css';
import CardComida from './CardComida';

export default function ComidaList({ comidas }) {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2,
        390: 1
    };
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {comidas.map((value, idx) => (<div key={idx}><CardComida comida={value}></CardComida></div>))}
            {/* <CardComida></CardComida>
            <CardComida></CardComida>
            <CardComida></CardComida>
            <CardComida></CardComida> */}
        </Masonry>
    );
}
