import carrito from "../carrito.png"
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexto/Contexto";
import "../css/carrito.css";

export default function ElCarrito() {
  const {totalUnidades} = useContext(CartContext);
  
  /* const {totalCompra} = useContext(CartContext); */
  return (
    <>
      <Link to ="/carrito/" className="nav-link">
          <img className="float-end" src={carrito} alt="carrito" width="32" height="32"/>
          {
            totalUnidades() !== 0 ? <> 
               <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{totalUnidades()}</span>
               </>
               : null
          }        {/* <span id="muestro_monto" className="monto">{totalCompra()}</span> */}
      </Link>
    </>
  )
}