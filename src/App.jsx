import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Proyectos from './components/proyectos/Proyectos';
import Home from './components/home/Home';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/iniciar-sesion" component={Login} />
              <Route exact path="/registro" component={Register} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
