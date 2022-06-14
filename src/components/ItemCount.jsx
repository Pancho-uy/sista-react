import { Alert } from "bootstrap";
import { useState } from "react"
import ElCarrito from "./Carrito";

function BotonCompra({stock,inicio}) {
  
  let [cantidad, setCount] = useState(inicio);
  
  /* cantidad=inicio; */

  function agrego(){
    setCount(cantidad + 1);
    if (cantidad>=stock) {alert("NO HAY MAS STOCK");
    setCount(cantidad=stock);}
  }
  
  function saco(){
    setCount(cantidad - 1)
    if (cantidad<=inicio) {alert("NO SE PUEDE SACAR MAS");
    setCount(cantidad=inicio);}
  }

  return (  
    <section className="container"> 
    <div>
      <br/>
      <span><h6> Quedan: {stock-cantidad}</h6></span>
      <br/>
        <button className="btn btn-outline-primary" onClick={saco}> - </button>
        <span><strong>    {cantidad}    </strong></span>
        <button className="btn btn-outline-primary" onClick={agrego}> + </button>

    </div>
    </section>
  )
}

export default BotonCompra