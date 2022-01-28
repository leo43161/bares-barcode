import React from 'react';

export default function Search({ inputSearch, setInputSearch, searchHandler }) {
    return (
        <div className="position-relative">
            <input className={`form-control rounded-pill`} id="nombre" value={inputSearch} name="nombre" type="text" onChange={searchHandler} placeholder="Sandwich de milanesa, hamburguesa..." />
            {inputSearch.trim() !== "" ? <button type="button" className="btn-close position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setInputSearch("")} aria-label="Close"></button> : null}
        </div>
    );
}
