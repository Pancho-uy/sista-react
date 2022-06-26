import { useState } from 'react';
import { Link } from 'react-router-dom';
import BotonCompra from './ItemCount';


function ItemDetail({item}) {
  const [cant, setCantidad]=useState(0);
  const onAdd= (cantidad)=>{
    console.log("Cantidad al carrito: ",cantidad)
      setCantidad(cantidad);
  }
  return (
    <>
     <div className="card">
        <div className="card-body">
                <img src={item.img} alt="imagen del articulo"></img>
                <h3 className="card-title">{item.name}</h3>
                <p><strong>{item.category}</strong></p>
                <p>{item.description}</p>
                <p><strong>USD {item.price} IVA Incl.</strong></p>
        </div>
        <div className='card-footer'>
          <div className='row'>
            <div className="col">
              {
                cant === 0 ?
                (
                <BotonCompra itemID = {item.ID} stock={item.stock} inicio={1} onAdd={onAdd}/>
                )
                :
                (
                  <Link to ="/carrito/"><button className="btn btn-outline-primary">Ir al Carrito </button></Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
    {/* <br></br>   */}
    </>
  )
}

export default ItemDetail