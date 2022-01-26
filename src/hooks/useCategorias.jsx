import { useContext, useState, useEffect } from 'react';
import Context from '../context/CategoriasContext'
import { getAll } from '../helpers/crudHelpers';

export default function useComida() {
    const [reloadCategorias, setReloadCategorias] = useState(true);
    const { categorias, setCategorias } = useContext(Context);

    useEffect(() => {
        if (reloadCategorias) {
            getAll("categorias", setCategorias);
            setReloadCategorias(false);
        }
    }, [reloadCategorias, setCategorias]);

    return {
        categorias, setReloadCategorias
    }
}