import { useState } from "react"

function BotonCompra({stock,inicio,items}) {

  // Inicializo la cantidad que se muestra en pantalla en 0 (inicio viene con 1)
  const [cantidad, setCount] = useState(inicio-1);

  // Stock viene con 10

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