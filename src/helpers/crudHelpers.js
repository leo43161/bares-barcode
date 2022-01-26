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