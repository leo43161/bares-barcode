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
  return (
    <Switch>
      <div className="col-lg-6 mx-auto px-2 h-100">
        <Header></Header>
        <Search setInputSearch={setInputSearch} inputSearch={inputSearch}></Search>
        <Route path="/">
          <Comida></Comida>
        </Route>
        <Route path="/:mesa">
          {() => {
            return !mesa ?
              <div className="barcode my-auto">
                <div className="d-flex justify-content-around align-items-center text-menu-title title-neon h2">Cargando...</div>
              </div>
              : !mesa.disponible ?
                <div className="text-menu-title title-neon h2 text-center">No disponible</div> : inputSearch.trim() !== "" ?
                  <>
                    <NavCategorias setInputSearch={setInputSearch}></NavCategorias>
                    <Comida inputSearch={inputSearch}></Comida>
                  </>
                  : <Categorias></Categorias>
          }}
        </Route>
        <Route path="/:mesa/:categoria">
          {({ categoria }) => (
            <>
              <NavCategorias categoria={categoria} setInputSearch={setInputSearch}></NavCategorias>
              <Comida categoria={categoria} inputSearch={inputSearch}></Comida>
            </>
          )}
        </Route>
      </div>
    </Switch>
  );
}

export default App;
