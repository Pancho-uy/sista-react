/* CARRITO DE COMPRA */
import { CartContext } from '../contexto/Contexto';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormUSR from './formUSR';
import { creoOrdenDeCompra } from '../services/firestore';

/* const divCentrado={
  margin: "0,50%,0,50%"
} */

const centrado={
  width: "40rem",
}

const margenSup = {
  margin: "7rem"
}
const anchoCard = {
  width: "25rem",
  heigth: "25rem"
}
const CarritoDeCompras=() => {
  const {cart, borroItems, totalCompra} = useContext(CartContext);

  function handleBuyOrder()
  {
  const dataOrder = {
    buyer: {  
      name: "prueba", 
      phone: "123456789", 
      email: "pp@pp.com" 
    },
    items: cart,
    total: totalCompra()
  };
  console.log(dataOrder.items);
  creoOrdenDeCompra(dataOrder);
}

  if (cart.length === 0) {
    return (
    <>
      <h2 style={margenSup} className="seccionAnima">No hay items en el carrito</h2>
      <Link to ="/"><button className="btn btn-danger divCentrado">Ir al Inicio </button></Link>
    </>
    )}
  return (
    <div style={margenSup}>
      <div class ="row" style={margenSup}>
        <h2>Carrito de Compras</h2>
        <br/>
        <br/>
        <div class="row">
        {
          cart.map((item) =>
          (
            <div class="col-md-4">
              <div key={item.ID} className='card border-info mb-3' style={anchoCard}>
                  <div  key={item.ID} >
                    <img src={item.img} alt="" height={'95rem'}></img> 
                    <h5 className='card-title'>{item.name}</h5>
                    <p className="text-muted">{item.category}</p>
                  </div>
                  <p className="card-text">Precio unitario: USD {item.price}</p>
                  <p className="card-text">Unidades compradas: {item.cantidad}</p>
                  <p className="card-text strong">Sub-Total: USD {item.cantidad*item.price}</p>
                  <button className='btn btn-danger' onClick={() => borroItems(item.id)}>Quitar del carrito</button>
              </div>
            </div>
          ))
       }
       </div>
      </div>
      <div className="row">
      <hr/>
        <div class="mx-auto" style={centrado}>
          <h3> Total de la compra: {totalCompra()}</h3>
          <button 
                className="btn btn-danger" style={anchoCard}
                onClick={handleBuyOrder}>Terminar Compra 
          </button>
        </div>
      </div>
    </div>
    
  );
      }
export default CarritoDeCompras 