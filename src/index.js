import React from 'react';
import { ComidaContextProvider } from "./context/ComidaContext";
import { CategoriasContextProvider } from "./context/CategoriasContext";
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ComidaContextProvider>
      <CategoriasContextProvider>
        <App />
      </CategoriasContextProvider>
    </ComidaContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
