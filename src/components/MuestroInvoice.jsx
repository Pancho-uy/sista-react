import React from 'react';

function muestroInvoice(dataOrder) {
  return (
    <>
    <div><h2>INVOICE {dataOrder.id}</h2></div>
    
    <div>{dataOrder.buyer.name}</div>
    <div>{dataOrder.buyer.phone}</div>
    <div>{dataOrder.buyer.email}</div>
    <div>{dataOrder.items.map(item => item.name)}</div>
    <div>{dataOrder.items.map(item => item.price)}</div>
    <div>{dataOrder.total}</div>
    <input type='text'></input>
    </>
  )
}

export default muestroInvoice