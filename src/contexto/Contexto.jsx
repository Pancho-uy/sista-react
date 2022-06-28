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
        console.log("EL ITEM: ",...item)
        if (isInCart(item.id)) {
            //aca sumo cantidad a item que ya agegué
            console.log('En el carrito, le sumo items');
            console.log("ITEMSS: ",{...item});
            console.log("CANTIDAD",cantidad);
        } else {
            // aca agrego cantidad de item nuevo
            console.log({...item});
            console.log(cantidad);
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //función para verificar si el producto ya está en el carrito
    const isInCart = (ID) => {
        //some devuelve true o false
        console.log("ID ",ID)
        return cart.some((prod) => prod.ID === ID);
    };

    //función para calcular $ del carrito

    //función para calcular total de unidades que tengo en el carrito y mostrarlas en el cartWidget

    //funcion para eliminar un item del carrito

    //funcion para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, micarrito, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};