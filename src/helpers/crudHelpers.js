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
    console.log(mesa)
    try {
        const response = await fetch(URLServer + 'mesas/check/' + mesa);
        const result = await response.json();
        if (result) {
            return result;
        } else {
            return result;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}