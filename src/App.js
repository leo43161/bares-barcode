import './App.css';
import { Route, Switch, useRoute } from "wouter";
import Header from './components/common/Header';
import useMesas from './hooks/useMesas';
import { useState } from 'react';
import Comida from './pages/Comida';
import Search from './components/Search';

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const { mesaMatch } = useMesas();
  const [match, params] = useRoute("/:mesa");
  const mesa = match ? mesaMatch(params.mesa) : null;
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
    <Switch>
      <div className="col-lg-6 mx-auto h-100">
        <Header></Header>
        {mesa ? mesa.disponible && <Search setInputSearch={setInputSearch} inputSearch={inputSearch} searchHandler={searchHandler}></Search> : null}
        <Route path="/">
          <Comida></Comida>
        </Route>
        <Route path="/:mesa">
          {() => {
            return !mesa ?
              <div className="barcode my-auto h-100">
                <div className="d-flex justify-content-around align-items-center h-100 text-menu-title title-neon h2">Cargando...</div>
              </div>
              : !mesa.disponible ?
                <h1>No disponible</h1> :
                <h2>Mesa disponible</h2>
          }}
        </Route>
      </div>
    </Switch>
  );
}

export default App;
