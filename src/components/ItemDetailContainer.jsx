import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import  { traerUnProducto} from '../services/firestore';
import Spinner from 'react-bootstrap/Spinner';

const margenSup = {
    margin: "7%"
}

function ItemDetailContainer({detalle}) {
    const [articulo, setArticulo] = useState({});
    const [isLoading, setIsLoading]= useState(true);

    const {id} = useParams();
    useEffect(() => {
        traerUnProducto(id)
            .then((res) => {
                setArticulo(res);
                setIsLoading(false);
            })
            .catch((error) => {
                alert(error);
            });
    }, [id]);
    return (
        <>
        { isLoading
        ?
        <div className="d-flex justify-content-center" style ={margenSup}>
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}/>
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