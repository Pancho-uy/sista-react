import { useState } from "react";
import { NavLink } from "react-router-dom";

function BotonCompra({stock,inicio, onAdd}) {

  let [cantidad, setCount] = useState(inicio);

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
            <div className="row">
              <div className="col">
                <h6> Quedan: {stock-cantidad} </h6>
              </div>
              <div className="col">
                <button className="btn btn-outline-primary" onClick={saco}> - </button>
                <span><strong>    {cantidad}    </strong></span>
                <button className="btn btn-outline-primary" onClick={agrego}> + </button>
              </div>
                <div className="col">
                    <button className="btn btn-outline-primary" onClick={()=>onAdd(cantidad)}> Agregar al Carrito </button>
                </div>
              <div className="col">
                <NavLink to ="/">
                  <button className="btn btn-outline-primary"> Volver </button>
                </NavLink>
              </div>
            </div>
          </div>
    </section>
  )
}

export default BotonCompra