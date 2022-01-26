import { useContext, useState, useEffect } from 'react';
import Context from '../context/ComidaContext'
import { getAll } from '../helpers/crudHelpers';

export default function useComida() {
    const [reloadComida, setReloadComida] = useState(true);
    const { comida, setComida } = useContext(Context);

    useEffect(() => {
        if (reloadComida) {
            getAll("comida", setComida);
            setReloadComida(false);
        }
    }, [reloadComida, setComida]);

    return {
        comida, setReloadComida
    }
}