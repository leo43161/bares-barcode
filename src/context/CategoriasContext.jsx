import React, { useState } from "react";
const Context = React.createContext({})

export function CategoriasContextProvider({ children }) {
    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);

    return <Context.Provider value={{ categorias, setCategorias, subcategorias, setSubcategorias }}>
        {children}
    </Context.Provider>
}

export default Context