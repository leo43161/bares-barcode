import './App.css';
import { Route } from "wouter";
import Header from './components/common/Header';
import { useState } from 'react';

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const searchHandler = (e) => {
    const valor = e.target.value.toLowerCase();
    setInputSearch(valor);
    if (valor.trim() !== "") {
      /* const _comidaFilter = comida.filter((comida) => {
          return comida.nombre.toLowerCase().includes(valor) || comida.descripcion.toLowerCase().includes(valor);
      });
      setComidaSearch(_comidaFilter); */
    } else {
      /* setComidaSearch([]); */
    } 
  }
  return (
    <div className="col-lg-6 mx-auto border">
      <Header setInputSearch={setInputSearch} inputSearch={inputSearch} searchHandler={searchHandler}></Header>
      <Route path="/">
        {(params) => <h1 className="">Hello, {params.username}!</h1>}
      </Route>
      <Route path="/:categoria">
        {(params) => <h1>Es la categoria: {params.categoria}!</h1>}
      </Route>
    </div>
  );
}

export default App;
