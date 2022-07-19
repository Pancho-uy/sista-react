import {useState} from 'react'

function FormUSR({cart, totalCompra, creoOrdenDeCompra, clearCart}) {

  const [buyer, setBuyer] = useState(  {
      name: "",
      phone: "",
      email: "",
    },
  )

  const handleChange = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;

    setBuyer({
      ...buyer,
      [field]: value,
    })
  }

  function handleBuyOrder(evt) {
    evt.preventDefault();
    const dataOrder = {
      buyer,
      items: cart,
      total: totalCompra(),
    };
    creoOrdenDeCompra(dataOrder).then(( orderDataCreated ) => {<div>${dataOrder}</div>
    alert('¡Gracias por su compra!\n\nSu orden de compra ha sido creada con el número: ' + orderDataCreated.id+
    '\n\nLe enviaremos un email a: '+dataOrder.buyer.email+' a la brevedad para coordinar la entrega.');
      clearCart();});
  }

  return (
    <form>
      <div className='mb-4'>
        <label htmlFor="username" className='form-label'><span>Usuario</span></label>
        <input className='form-control' onChange={handleChange} name="name"></input>
      </div>
      <div className='mb-4'>
        <label htmlFor="phone" className='form-label'><span>Telefono </span></label>
        <input className='form-control' onChange={handleChange} name="phone"></input>
      </div>
      <div className='mb-4'>
        <label htmlFor="email" className='form-label'><span>Email</span></label>
        <input type='email' className='form-control' onChange={handleChange} name="email"></input>
      </div>
      <div className='mb-4'>
        <button className='btn btn-danger' onClick={handleBuyOrder}>Finalizar Compra</button>
      </div>
    </form>
  )
}
export default FormUSR