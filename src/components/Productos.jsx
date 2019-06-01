import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";
import Producto from "./Producto";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const { productos } = this.props;
    return (
      <div>
        <h1>Listado de productos</h1>
        {productos.map((producto, index) => {
          return <Producto key={index} producto={producto}>

          </Producto>;
        })}

          <Link to={"Formulario"} className="btn btn-success">
          <button>Agregar</button>
            </Link>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(
  mapStateToProp,
  { mostrarProductos }
)(Productos);
