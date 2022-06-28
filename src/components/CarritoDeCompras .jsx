/* CARRITO DE COMPRA */
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexto/Contexto';
/* import Item from './Item'; */

const margenSup = {
  margin: "7%"
}
const CarritoDeCompras=() => {
  const {agregoAlCart}=useContext(CartContext)

  return (
    <div style={margenSup}>
      <h2>Carrito de Compras</h2>
      <button onClick={agregoAlCart}>Muestro en console.log</button>
    </div>
  )
}

export default CarritoDeCompras 