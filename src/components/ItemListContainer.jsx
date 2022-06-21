import React, { useState, useEffect } from 'react';
import productos from '../db/articulosDB.json';
import ItemList from './ItemList';
import Saludo from './ElSaludo';
import { useParams } from 'react-router-dom';
import NavBarDetail from './navBarDetail';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {catID}= useParams();
    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (catID === undefined)
                    res(productos);
                else{
                    const filtrados = products.filter(categoria =>{
                        return catID===catID;
                    })
                    res(filtrados);
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
    }, []);
    return (
        <>
          <div>
            <NavBarDetail/>
            <Saludo/>
            <ItemList items={products}/>
          </div>
        </>
    );
};
export default ItemListContainer;