import { useContext, useState, useEffect, useCallback } from 'react';
import Context from '../context/MesasContext'
import { getAll } from '../helpers/crudHelpers';

export default function useMesas() {
    const [reloadMesas, setReloadMesas] = useState(true);
    const { mesas, setMesas } = useContext(Context);

    const mesaMatch = useCallback((mesa) => {
        const findMesa = mesas.find(mesas => mesas._id === mesa);
        return findMesa;
    }, [mesas])

    useEffect(() => {
        if (reloadMesas) {
            getAll("mesas", setMesas);
            setReloadMesas(false);
        }
    }, [reloadMesas, setMesas]);

    return {
        mesas,
        setReloadMesas,
        mesaMatch: mesaMatch
    }
}