import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexto/Contexto';
import { exportDataToFirestore } from '../services/firestore';
import BotonCompra from './ItemCount';

function ItemDetail({item}) {
  const {addToCart} = useContext(CartContext);
  const {borroItems} = useContext(CartContext);

  const [cant, setCantidad]=useState(0);

  const onAdd= (cantidad)=>{
    console.log("Cantidad al carrito: ",cantidad)
      setCantidad(cantidad);
      addToCart(item, cantidad);
    }

  return (
    <>
     <div className="card">
        <div className="card-body">
                <img src={item.img} alt="imagen del articulo"></img>
                <h3 className="card-title">{item.name}</h3>
                <p className="text-muted">{item.category}</p>
                <p>{item.description}</p>
                <p><strong>USD {item.price} IVA Incl.</strong></p>
        </div>
        <div className='card-footer'> 
          <div className='row'>
            <div className="col">
              {
                cant === 0 ?
                (
                <BotonCompra itemID = {item.id} stock={item.stock} inicio={1} onAdd={onAdd}/>
                )
                :
                (
                  <>
                    <Link to ="/"><button className="btn btn-outline-primary">Seguir comprando </button></Link>
                    <Link to ="/carrito/"><button className="btn btn-outline-primary">Ir al Carrito </button></Link>
                    <Link to ="/"><button className='btn btn-danger' onClick={() => borroItems(item.id)}>Quitar del carrito</button></Link>
                   {/*  <button onClick={exportDataToFirestore} className="btn btn-outline-primary">Exportar a Firestore</button> */}
                  </>
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