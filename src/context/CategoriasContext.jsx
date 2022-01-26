import React, { useState } from "react";
const Context = React.createContext({})

export function CategoriasContextProvider({ children }) {
    const [categorias, setCategorias] = useState([]);

    return <Context.Provider value={{ categorias, setCategorias }}>
        {children}
    </Context.Provider>
}

export default Context