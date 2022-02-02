import './App.css';
import './css/Components.css';
import { Route, Switch, useRoute } from "wouter";
import Header from './components/common/Header';
import useMesas from './hooks/useMesas';
import { useState } from 'react';
import Comida from './pages/Comida';
import Search from './components/Search';
import Categorias from './pages/Categorias';
import NavCategorias from './components/NavCategorias';

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const { mesaMatch } = useMesas();
  const [match, params] = useRoute("/:mesa");
  const mesa = match ? mesaMatch(params.mesa) : null;
  const searchHandler = (e) => {
    const valor = e.target.value.toLowerCase();
    setInputSearch(valor);
  }
  return (
    <Switch>
      <div className="col-lg-6 mx-auto h-100 px-2">
        <Header></Header>
        <Search setInputSearch={setInputSearch} inputSearch={inputSearch} searchHandler={searchHandler}></Search>
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
                <h1>No disponible</h1> : inputSearch.trim() !== "" ?
                  <>
                    <NavCategorias setInputSearch={setInputSearch}></NavCategorias>
                    <Comida inputSearch={inputSearch}></Comida>
                  </>
                  : <Categorias></Categorias>
          }}
        </Route>
        <Route path="/:mesa/:categoria">
          {({ categoria }) => <>
            <NavCategorias categoria={categoria} setInputSearch={setInputSearch}></NavCategorias>
            <Comida categoria={categoria} inputSearch={inputSearch}></Comida>
          </>}
        </Route>
      </div>
    </Switch>
  );
}

export default App;
