import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();   // Contexto para envolver toda la APP
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
    }, [cart]);

    // Calculo total de unidades de TODOS los articulos agregados al carrito

    function totalUnidades() {
        let total = 0;
        cart.forEach((item) => (total = total + item.cantidad));
        return total;
    }

    //Calculo monto total de artículos en el carrito

    function totalCompra() {
        let montoTotal = 0;
        cart.forEach((item) => (montoTotal = montoTotal + (item.cantidad*item.price)));
        let ret="USD "+montoTotal.toFixed(2);
        return ret;
    }
    // Agrego las cantidades de los items comprados al carrito
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            console.log("item.id", item.id)
            let indice = cart.findIndex(elitem=>elitem.id===item.id); 
            console.log("elitem.ID", indice)
            let articulo = cart[indice];  
            articulo.cantidad=articulo.cantidad+cantidad;
            const CarritoTemp= [...cart];  
            CarritoTemp.splice(indice,1,articulo);  
            setCart([...CarritoTemp]);

        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id); // Si lo encuentro retono TRUE
    };

    // Remuevo el carrito el item seleccionado 
    function borroItems(id) {
        let carritoFiltrado=cart.filter(item=>item.id!==id);
        setCart(carritoFiltrado);
    }

    const clearCart = () => {
        setCart([]);           //Borro todos los items del carrito
    };

    return (
        <CartContext.Provider value={{ cart, borroItems, addToCart, clearCart, totalUnidades, totalCompra}}>
            {children}
        </CartContext.Provider>
    );
};