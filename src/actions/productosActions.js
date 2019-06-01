import {MOSTRAR_PRODUCTOS, CREAR_PRODUCTO, BUSCAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO} from "./types";
import axios from "axios";

// axios para conexion a bd
//let url = "http://localhost:5000/productos";
let url = "https://my-json-server.typicode.com/nkt666/productosbootcampdb/productos";

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get(url);
    console.log(respuesta);
  
    dispatch({
      type: MOSTRAR_PRODUCTOS,
      payload: respuesta.data
    });
    //return { type: MOSTRAR_PRODUCTOS };
  };


export const crearProducto = (producto) => async dispatch => {
    const respuesta = await axios.post(url, producto);
    console.log(respuesta);

    dispatch({
        type: CREAR_PRODUCTO,
        payload: respuesta.data
      });
}

export const editarProducto = (producto, id) => async dispatch => {
    console.log(producto, id);
    const respuesta = await axios.put(url+"/"+id, producto);

    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    });
}

export const eliminarProducto = (id) => async dispatch => {
    const respuesta = await axios.delete(url +"/" +id);
    console.log(respuesta);

    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
      });
}