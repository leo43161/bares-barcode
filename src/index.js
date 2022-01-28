import React from 'react';
import { ComidaContextProvider } from "./context/ComidaContext";
import { CategoriasContextProvider } from "./context/CategoriasContext";
import { MesasContextProvider } from "./context/MesasContext";
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ComidaContextProvider>
      <CategoriasContextProvider>
        <MesasContextProvider>
          <App />
        </MesasContextProvider>
      </CategoriasContextProvider>
    </ComidaContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
