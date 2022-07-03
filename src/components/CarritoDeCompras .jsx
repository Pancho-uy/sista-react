/* CARRITO DE COMPRA */
import { CartContext } from '../contexto/Contexto';
import { useContext } from 'react';



const margenSup = {
  margin: "7rem"
}
const anchoCard = {
  width: "25rem",
  heigth: "25rem"
}
const CarritoDeCompras=() => {
  const {cart} = useContext(CartContext);
  const {borroItem} = useContext(CartContext);

  return (
    <div style={margenSup}>
      <div class ="row" style={margenSup}>
        <h2>Carrito de Compras</h2>
        <div class="row">
        {
          cart.map((item) => (
            <div class="col-md-4">
            <div key={item.ID} className='card border-info mb-3' style={anchoCard}>
                <div  key={item.ID} >
                  <img src={item.img} alt="" height={'95rem'}></img>
                  <h5 className='card-title'>{item.name}</h5>
                </div>
                <p>Precio unitario: USD {item.price}</p>
            <p>Unidades compradas: {item.cantidad}</p>
            <button className='btn btn-danger' onClick={() => borroItem(item.ID)}>Borrar</button>
            </div>
            </div>
          ))
       }
       </div>
      </div>
    </div>
  );
      }
export default CarritoDeCompras 