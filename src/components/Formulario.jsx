import React, { Component } from "react";
import { connect } from "react-redux";
import { crearProducto } from "../actions/productosActions";

class Formulario extends Component {
  state = {
    nombre: "",
    precio: 0
  };

  changeInput = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  insertar = () => {
    this.props.crearProducto(this.state);
    // solo funciona para formulario si esta enrutado
    this.props.history.push("/");
  };

  borderStyle = {
    border: "2px solid black",
    borderRightColor: "black"
  };

  render() {
    return (
      <div>
        <h1>Producto</h1>

        <div>
          <label htmlFor="">nombre</label>
          <input type="text" name = "nombre" onChange = {this.changeInput} size="20" />
        </div>
        <div>
          <label htmlFor="">precio</label>
          <input type="text" name = "precio" onChange = {this.changeInput} size="20" />
        </div>
        <div />
        <button className="btn btn-info" onClick={this.insertar}>
          ingresar
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { crearProducto }
)(Formulario);
