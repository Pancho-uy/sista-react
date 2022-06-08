import { useState } from "react"
import ElCarrito from "./Carrito";

function BotonCompra({stock,inicio,items}) {

  const [cantidad, setCount] = useState(inicio-1);
  /* cantidad=inicio; */

  function agrego(){
    if (cantidad>=stock) {
      alert("NO HAY MAS STOCK");}
    else {setCount(cantidad + 1)};
  }

  function saco(){
    if (cantidad<=inicio-1) {
      alert("NO SE PUEDE SACAR MAS");}
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