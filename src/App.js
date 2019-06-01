import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";
import Formulario from "./components/Formulario.jsx"
import FormularioEdicion from "./components/FormularioEdicion.jsx"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NoRuta from "./components/NoRuta";
import "./App.css";
//import {Button} from "semantic-ui-react";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Bienvenidos a la clase de Redux</h1>
      
        <BrowserRouter>
        <Switch>
          <Route
          exact path = "/" component = {Productos} />
          
          <Route exact path = "/Formulario" component = {Formulario} />
          <Route exact path = "/FormularioEdicion/:id" component = {FormularioEdicion} />

          <Route component = {NoRuta} />
        </Switch>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
