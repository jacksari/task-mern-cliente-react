import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Proyectos from "./components/proyectos/Proyectos";
import Home from "./components/home/Home";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/nueva-cuenta" component={Register}/>
            <Route exact path="/proyectos" component={Proyectos}/>
        </Switch>
    </Router>
  );
}

export default App;
