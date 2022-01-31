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
    }, [comida])

    useEffect(() => {
        if (reloadComida) {
            getAll("comida", setComida);
            setReloadComida(false);
        }
    }, [reloadComida, setComida]);

    return {
        comida, setReloadComida, comidaFilter
    }
}