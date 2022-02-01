import React from 'react';
import { useLocation } from "wouter";
import { URLImg, BAR } from "../config/index.js";

export default function CardCategorias({ categoria }) {
    const [location, setLocation] = useLocation();
    const { titulo, icono, _id } = categoria;
    return (
        <div className="card card-category" onClick={() => setLocation(`/${location.split("/")[1]}/${_id}`)}>
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
                <div className="p-4 p-lg-2">
                    <img className="img-fluid" src={URLImg + BAR + "/" + icono} alt={titulo} />
                </div>
                <div className="text-center my-2 menu-bold h5 text-center menu-bold">{titulo}</div>
            </div>
        </div>
    );
}
