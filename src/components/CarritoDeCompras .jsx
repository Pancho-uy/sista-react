/* CARRITO DE COMPRA */
import { CartContext } from '../contexto/Contexto';
import { useContext } from 'react';



const margenSup = {
  margin: "7%"
}
const CarritoDeCompras=() => {
  const {cart} = useContext(CartContext);

  return (
    <div style={margenSup}>
      <div className='container' style={margenSup}>
        <h2>Carrito de Compras</h2>
        {
          cart.map((item) => (
            <div key={item.ID} className='row'>
                <div className='col-md-4' key={item.ID}>
                  <h3 className='text-center'>{item.name}</h3>
                </div>
              <p className='text-center'>USD {item.price}</p>

            <p className='text-center'>{item.cantidad}</p>
           {/*  <button className='btn btn-danger' onClick={() => borroItem(item.ID)}>Borrar</button> */}
            </div>
          ))
       }
      </div>
    </div>
  );
      }
export default CarritoDeCompras 