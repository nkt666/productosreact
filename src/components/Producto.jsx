import React, { Component } from "react";
import { eliminarProducto, editarProducto } from "../actions/productosActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class Producto extends Component {
    

    render() {
    const { producto } = this.props;
    return (
        <p>- {producto.nombre} / {producto.precio}
          <Link to={"FormularioEdicion/"+ producto.id} className="btn btn-success">
          <button>Editar</button>
            </Link>
        <button className="btn btn-info" onClick={()=>{
            this.props.eliminarProducto(producto.id).then(()=>{
                this.props.history.push("/");
            });
           
        }}>eliminar</button>
        </p>  
    );
  }
}

export default connect(
    null,
    { eliminarProducto, editarProducto }
  )(withRouter(Producto));