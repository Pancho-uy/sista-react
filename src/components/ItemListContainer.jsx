import React, { useState, useEffect } from 'react';
import productos from '../db/articulosDB.json';
import ItemList from './ItemList';
import Saludo from './ElSaludo';
import { useParams } from 'react-router-dom';

const margenSup = {
    margin: "7%"
}

const ItemListContainer = ({detalle}) => {
    const [products, setProducts] = useState([]);
    const {catID}= useParams();
    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (catID === undefined)
                    res(productos);
                else{
                    const filtrados = productos.filter(categoria =>{
                        return categoria.category===catID;
                    })
                    res(filtrados);
/*                     console.log("FILTRADOS: ",filtrados) */
                }
            }, 2000); // Dos segundos de delay
        });
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [catID]);
/*     console.log("CATEGORIA: ",products) */
    return (
        <>
        <Saludo saludo={detalle}/>
        <div style={margenSup}>
            <ItemList items={products}/>
        </div>
        </>
    );
};
export default ItemListContainer;