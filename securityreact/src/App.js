
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import UsuarioState from './context/Usuario/usuarioState';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import tokenAuth from './config/token';
import RutaPrivada from './context/ruta/rutaPrivada';



function App(props) {

  // Revisar si tenemos un token
  const token = localStorage.getItem('token');

  if (token) {
    tokenAuth(token);
  }

  return (
    <UsuarioState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <RutaPrivada exact path="/home" component={NavBar} />
          <RutaPrivada exact path="/usuarios" component={Home} />
          <Route />
        </Switch>
      </Router>
    </UsuarioState>


  );
}

export default App;
