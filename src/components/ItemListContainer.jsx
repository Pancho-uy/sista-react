import React, { useState, useEffect } from 'react';
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
    let mensaje="";
    useEffect(() => {
        if (catID){

                    traerProductosDeCategoria(catID).then((res) => {
                        setProducts(res);})
                        .catch((error) => {
                        alert(error);
                });
        }
        else {
                    traerProductos() // de firestore
                        .then((res) => {
                            setProducts(res);
                        })
                        .catch((error) => {
                            alert(error);
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