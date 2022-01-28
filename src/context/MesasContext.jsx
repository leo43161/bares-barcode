import React, { useState } from "react";
const Context = React.createContext({})

export function MesasContextProvider({ children }) {
    const [mesas, setMesas] = useState([]);

    return <Context.Provider value={{ mesas, setMesas }}>
        {children}
    </Context.Provider>
}

export default Context