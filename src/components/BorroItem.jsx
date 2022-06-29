import { useState } from "react";
import { NavLink } from "react-router-dom";

function BorroElItem({delItem}) {

/*   let [cantidad, setCount] = useState(inicio); */

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