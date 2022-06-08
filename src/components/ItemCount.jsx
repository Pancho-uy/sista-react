import { Alert } from "bootstrap";
import { useState } from "react"
import ElCarrito from "./Carrito";

function BotonCompra({stock,inicio}) {

  const [cantidad, setCount] = useState(inicio);
  /* cantidad=inicio; */

  function agrego(){
    
    if (cantidad>=stock) {
      alert("NO HAY MAS STOCK");
      setCount(cantidad=stock);}
    else {setCount(cantidad + 1)};
  }

  function saco(){
    if (cantidad<=inicio) {
      alert("NO SE PUEDE SACAR MAS");
      setCount(cantidad=inicio);}
    else {setCount(cantidad - 1)}
  }

  return (
    <section className="container">
    <div>
      <br/>
      <br/>
      <br/>
        <button className="btn btn-outline-primary" onClick={saco}> - </button>
        <span><strong>    {cantidad}    </strong></span>
        <button className="btn btn-outline-primary" onClick={agrego}> + </button>
    </div>
    </section>
  )
}

export default BotonCompra