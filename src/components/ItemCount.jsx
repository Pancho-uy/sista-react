import { useState } from "react";
import { Link } from "react-router-dom";

function BotonCompra({itemID, stock,inicio}) {

  let [cantidad, setCount] = useState(inicio);
  const miURL=`/detalle/${itemID}`;
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
      <div className="row">
        <div className="col">
          <div>
            <button className="btn btn-outline-primary" onClick={saco}> - </button>
            <span><strong>    {cantidad}    </strong></span>
            <button className="btn btn-outline-primary" onClick={agrego}> + </button>
          </div>
        </div>
        <div className="col">
          <div> 
            <Link to={miURL} >
              <button className="btn btn-outline-primary"> + INFO </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BotonCompra