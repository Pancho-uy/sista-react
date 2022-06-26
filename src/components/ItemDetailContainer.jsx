import React, { useState, useEffect } from 'react';
import articulos from '../db/articulosDB.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const margenSup = {
    margin: "7%"
}

function ItemDetailContainer({detalle}) {
    const [articulo, setArticulo] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const traerArticulo = new Promise((res, rej) => {
            setTimeout(() => {
                res(articulos[id]);
            }, 600); // Dos segundos de delay
        });
        traerArticulo
            .then((res) => {
                setArticulo(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
          <div style={margenSup}>
            <h2>{detalle}</h2>
            <ItemDetail itemID={id} item={articulo}/>
          </div>
        </>
    ); 
}

export default ItemDetailContainer