import React, { useState, useEffect } from 'react';
import styles from '../css/style.css'
/* import articulos from '../db/articulosDB.json'; */
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import  {traerProductos, traerUnProducto} from '../services/firestore';

const margenSup = {
    margin: "7%"
}

function ItemDetailContainer({detalle}) {
    const [articulo, setArticulo] = useState({});
    const [isLoading, setIsLoading]= useState(true);

    const {id} = useParams();
    useEffect(() => {
        /* const traerArticulo = new Promise((res, rej) => {
            setTimeout(() => {
                res(articulos[id]);
            }, 1600); // 1.6 seg delay
        }) */;
        traerUnProducto(id)
            .then((res) => {
                setArticulo(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
        { isLoading
        ?   <div className={styles.divCentrado} style ={margenSup}>
                <div class="centrado spinner-border" role="status">
                    <span class="sr-only"> </span>
                </div>
            </div>
        :
          <div style={margenSup}>
            <h2>{detalle}</h2>
            <ItemDetail itemID={id} item={articulo}/>
          </div>
        }
        </>
    );
}

export default ItemDetailContainer