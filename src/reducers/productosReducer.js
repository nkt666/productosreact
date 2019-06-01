import { MOSTRAR_PRODUCTOS, CREAR_PRODUCTO, BUSCAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO } from "../actions/types";

const estadoInicial = {
    productos: []
  };

 const eliminarProducto =(state, id) =>{
    let productosFiltro = state.productos.filter(function(elem){
        return elem.id != id;
    });

    return {...state, productos: productosFiltro}

}

const editarProducto = (state, producto) => {
    let productoOld = state.productos.find(function(elem){
        return elem.id == producto.id;
    });

    productoOld.nombre = producto.nombre;
    productoOld.precio = producto.precio;

    return state;
}


export default function(state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };
      break;
    case CREAR_PRODUCTO:
      return {...state, productos: [...state.productos, action.payload]};
      break;
    case EDITAR_PRODUCTO:
      console.log("editar reducer");
      return editarProducto(state, action.payload);
    case BUSCAR_PRODUCTO:
      console.log("buscar reducer");
      return { ...state, productos: action.payload };
    case ELIMINAR_PRODUCTO:
      console.log("eliminar");
      return eliminarProducto(state, action.payload);
      break;
    default:
      return state;
      break;
  }
}