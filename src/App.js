import './App.css';
import { Route } from "wouter";
import Header from './components/common/Header';

function App() {
  return (
    <div className="col-lg-6 mx-auto border">
      <Header></Header>
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
