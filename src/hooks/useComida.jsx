import { useContext, useState, useEffect, useCallback } from 'react';
import Context from '../context/ComidaContext'
import { getAll } from '../helpers/crudHelpers';

export default function useComida() {
    const [reloadComida, setReloadComida] = useState(true);
    const { comida, setComida } = useContext(Context);

    const comidaFilter = useCallback((categoria) => {
        const _comidas = comida.filter((value) => {
            return value.categoria.includes(categoria) && value.visible;
        });
        return _comidas;
    }, [comida]);

    const comidaSearch = useCallback((valor) => {
        if (valor.trim() !== "") {
            const _comidas = comida.filter((comida) => {
                return comida.nombre.toLowerCase().includes(valor) || comida.descripcion.toLowerCase().includes(valor);
            });
            return _comidas;
        } else {
            return [];
        }
    }, [comida])

    useEffect(() => {
        if (reloadComida) {
            getAll("comida", setComida);
            setReloadComida(false);
        }
    }, [reloadComida, setComida]);

    return {
        comida, setReloadComida, comidaFilter, comidaSearch
    }
}