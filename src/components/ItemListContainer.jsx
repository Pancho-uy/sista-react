import React, { useState, useEffect } from 'react';
import productos from '../db/articulosDB.json';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
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
                <ItemList items={products} />
            </div>

        </>
    );
};

export default ItemListContainer;