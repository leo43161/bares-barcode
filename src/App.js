import './App.css';
import { Route } from "wouter";
import Header from './components/common/Header';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Route path="/">
        {(params) => <div>Hello, {params.username}!</div>}
      </Route>
      <Route path="/:categoria">
          {(params) => <div>Es la categoria: {params.categoria}!</div>}
      </Route>
    </div>
  );
}

export default App;
