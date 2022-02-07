import { URLServer, BAR } from "../config/index.js";

export const getAll = async (dbTable, setState) => {
    try {
        const response = await fetch(URLServer + dbTable + '/' + BAR);
        const result = await response.json();
        if (result) {
            setState(result);
        } else {
            setState(result);
        }
    } catch (error) {
        setState([]);
    }
}

export const getMesa = async (mesa) => {
    try {
        const response = await fetch(URLServer + 'mesas/check/' + mesa);
        const result = await response.json();
        if (result) {
            return result;
        } else {
            return result;
        }
    } catch (error) {
        return null;
    }
}

export const fetchAlert = async (bool, id, state) => {
    try {
        const cabecera = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                bool,
                id
            }),
        };

        const resultado = await fetch(URLServer + "mesas/" + state, cabecera);

        if (resultado.status === 201) {
            return resultado;
        } else {
            return resultado;
        }
    } catch (error) {
        return null;
    }
}