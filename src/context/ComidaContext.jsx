import React, { useState } from "react";
const Context = React.createContext({})

export function ComidaContextProvider({ children }) {
    const [comida, setComida] = useState([]);

    return <Context.Provider value={{ comida, setComida }}>
        {children}
    </Context.Provider>
}

export default Context