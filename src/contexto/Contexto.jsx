import { createContext, useState, useEffect } from 'react';



export const CartContext = createContext();   // Contexto para envolver toda la APP

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log("CART",cart);
    }, [cart]);

    const micarrito = () => {
        console.log('contexto');
    };

    // Agrego las cantidades de los items comprados al carrito
    
    const addToCart = (item, cantidad) => {
        console.log("EL ITEM: ",item)
        if (isInCart(item.ID)) {
            //aca sumo cantidad seleccionada a item que ya existe en en carrito
            console.log('En el carrito, le sumo items');

        } else {
            // aca agrego la cantidad seleccionada del item nuevo
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //a ver si el producto ya está en el carrito
    const isInCart = (id) => {
        console.log("ID ",id)
        return cart.some((prod) => prod.ID === id);
    };

    //función para calcular $ del carrito

    //función para calcular total de unidades que tengo en el carrito y mostrarlas en el cartWidget

    //funcion para eliminar un item del carrito

    //Borro todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, micarrito, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};