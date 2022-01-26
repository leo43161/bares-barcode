import { useContext, useState, useEffect } from 'react';
import Context from '../context/CategoriasContext'
import { getAll } from '../helpers/crudHelpers';

export default function useComida() {
    const [reloadCategorias, setReloadCategorias] = useState(true);
    const [reloadSubcategorias, setReloadSubcategorias] = useState(true);
    const { categorias, setCategorias, subcategorias, setSubcategorias } = useContext(Context);

    useEffect(() => {
        if (reloadCategorias) {
            getAll("categorias", setCategorias);
            setReloadCategorias(false);
        }
    }, [reloadCategorias, setCategorias]);

    useEffect(() => {
        if (reloadSubcategorias) {
            getAll("subcategorias", setSubcategorias);
            setReloadSubcategorias(false);
        }
    }, [reloadSubcategorias, setSubcategorias]);

    return {
        categorias, setReloadCategorias, subcategorias, setSubcategorias
    }
}