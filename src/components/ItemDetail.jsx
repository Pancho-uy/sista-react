<<<<<<< HEAD
import React from 'react'

function ItemDetail({item}) {
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
    </div>
    <br></br>   
    </>
  )
}

=======
import React from 'react'

function ItemDetail({item}) {
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
    </div>
    <br></br>   
    </>
  )
}

>>>>>>> 780b061f69dde43b4f23c09726ca2ecb3f00de02
export default ItemDetail