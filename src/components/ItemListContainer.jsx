import React, { useState, useEffect } from 'react';
/* import productos from '../db/articulosDB.json'; */
import ItemList from './ItemList';
import Saludo from './ElSaludo';
import { useParams } from 'react-router-dom';
import {traerProductos, traerProductosDeCategoria} from '../services/firestore';

const margenSup = {
    margin: "7%"
}

const ItemListContainer = ({detalle}) => {
    const [products, setProducts] = useState([]);
    const {catID}= useParams();
    console.log("CATEGORIA DESDE USEPARAMS ",catID);
    let mensaje="";
    useEffect(() => {
        if (catID){

                    traerProductosDeCategoria(catID).then((res) => {
                        setProducts(res);})
                        .catch((error) => {
                        console.log(error);
                });
        }
        else {
                    traerProductos() // traerProductos() de firestore
                        .then((res) => {
                            setProducts(res);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
        }
    }, [catID]);

    if (products.length===0 && catID!==undefined)
        mensaje='NO HAY ARTÍCULOS EN ESTA CATEGORIA';
    return (
        <>
            <Saludo saludo={detalle}/>
            <div style={margenSup}>
                <ItemList aviso={mensaje} items={products}/>
            </div>
        </>
    );
};
export default ItemListContainer;

      /*   const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (catID === undefined)
                    res(productos);
                else{
                    const filtrados = productos.filter(categoria =>{
                        return categoria.category===catID;
                    })
                    res(filtrados);
                }
            }, 500); // delay
        });
       */  