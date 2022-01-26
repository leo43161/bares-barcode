import React from 'react';
import "../../css/Header.css";

export default function Header({ inputSearch, setInputSearch, searchHandler }) {
    return (
        <div>
            <div className="px-2 mb-2">
                <div className="text-center text-menu-title mb-1" onClick={() => {
                    console.log('Home')
                }}>
                    <h1 className="mb-3 title-neon">Miamee</h1>
                </div>

            </div>
            <div className="position-relative">
                <input className={`form-control rounded-pill`} id="nombre" value={inputSearch} name="nombre" type="text" onChange={searchHandler} placeholder="Sandwich de milanesa, hamburguesa..." />
                {inputSearch.trim() !== "" ? <button type="button" className="btn-close position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setInputSearch("")} aria-label="Close"></button> : null}
            </div>
        </div>
    );
}
