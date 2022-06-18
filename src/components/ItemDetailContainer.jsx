import React, { useState, useEffect } from 'react';
import articulos from '../db/articulosDB.json';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({detalle, itemID}) {
    const [articulo, setArticulo] = useState({});
    useEffect(() => {
        const traerArticulo = new Promise((res, rej) => {
            setTimeout(() => {
                res(articulos[itemID]);
            }, 300); // Dos segundos de delay
        });
        traerArticulo
            .then((res) => {
                setArticulo(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
          <div>
            <h2>{detalle}</h2>
            <ItemDetail item={articulo}/>
          </div>
        </>
    );
}

export default ItemDetailContainer