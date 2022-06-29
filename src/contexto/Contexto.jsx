import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();   // Contexto para envolver toda la APP

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    // Agrego las cantidades de los items comprados al carrito

    const addToCart = (item, cantidad) => {
        console.log("EL ITEM: ",cart)
        if (isInCart(item.ID)) {
            let indice = cart.findIndex(elitem=>elitem.ID===item.ID);
            let articulo = cart[indice];
            articulo.cantidad=articulo.cantidad+cantidad;
            let nombre = cart[indice].name
            const CarritoTemp= [...cart];
            CarritoTemp.splice(indice,1,articulo);
            setCart([...CarritoTemp]);
            // Muestro por console.log el carrito con el articulo con la cantidad sumada
            console.log("Item ", nombre," con la cantidad agregada")

        } else {
            // aca agrego la cantidad seleccionada del item nuevo
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //a ver si el producto ya está en el carrito
    const isInCart = (id) => {
   /*      console.log("ID ",id) */
        return cart.some((prod) => prod.ID === id);
    };

    const borroItem = (item) => {

        if (isInCart(item.ID)) {
            let indice = cart.findIndex(elitem=>elitem.ID!==item.ID);
            let articulo = cart[indice];
            let nombre = cart[indice].name
            const CarritoTemp= [...cart];
            CarritoTemp.filter(indice,1,articulo);
            setCart([...CarritoTemp]);
            // Muestro por console.log el carrito con el articulo con la cantidad sumada
            console.log("Item ", nombre," eliminado")}
        else
            alert("ERROR, carrito vacío")
        }

    //Borro todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, borroItem, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};