import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Cadastro from './screens/Cadastro';
import Consulta from './screens/Consulta';
import Editar from './screens/Editar'

function App() {
  return (
  <BrowserRouter>
    <div className="modelo">
      <header>

        <p> Cabeçalho </p>


      </header>

      <main>

      <Route path="/" component={Login} exact></Route>
      <Route path="/home" component={HomeScreen} ></Route>
      <Route path="/cadastro" component={Cadastro} ></Route>
      <Route path="/consulta" component={Consulta} ></Route>
      <Route path="/editar/:id" component={Editar} ></Route>

      </main>



      <footer>

        <p> End </p>

      </footer>



      </div>
  </BrowserRouter>
  );
}

export default App;
