import React, { useState } from 'react';
import { useLocation } from "wouter";
import useCategorias from '../hooks/useCategorias';

export default function NavCategorias({ categoria, setInputSearch }) {
  const { categorias } = useCategorias();
  const [positionScroll, setPositionScroll] = useState(0);
  const [location, setLocation] = useLocation();

  const scrollHandler = (e) => {
    let scrollPorcentage = 100 * e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth);
    setPositionScroll(scrollPorcentage);
  }

  return (
    <div className="pt-1">
      <div className="position-relative d-flex justify-content-around">
        <div className="d-flex justify-content-between flex-nowrap px-2 py-1 overflow-auto navbar-category" onScroll={scrollHandler}>
          {positionScroll !== 0 ? <div className="degradate-navbar-left top-0">
          </div> : null}

          <button className="d-flex border-0 position-relative justify-content-center align-items-center border pe-2 rounded-pill bg-color" onClick={() => {
            setInputSearch("");
            setLocation("/" + location.split("/")[1]);
          }}>
            <img src={process.env.PUBLIC_URL + '/icons/home-solid.svg'} className="text-dark" style={{ width: "20px" }} alt="" />
          </button>
          {categorias.map((value, idx) => (
            <button key={idx} onClick={() => {
              setInputSearch("");
              setLocation(`/${location.split("/")[1]}/${value._id}`);
            }} className={`d-flex border-0 position-relative justify-content-center align-items-center border px-2 rounded-pill bg-color ${value._id === categoria ? "active" : ""}`} autoFocus={value._id === categoria}>
              <span className="fw-bold text-nowrap">{value.titulo}</span>
            </button>
          ))}

          {positionScroll !== 100 ?
            <div className="degradate-navbar-right top-0">
            </div>
            : null}
        </div>

      </div>
    </div>
  );
}
