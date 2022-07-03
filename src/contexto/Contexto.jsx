import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();   // Contexto para envolver toda la APP

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    // Calculo total de unidades de TODOS los articulos agregados al carrito

    function totalUnidades() {
        let total = 0;
        cart.forEach((item) => (total = total + item.cantidad));
        console.log(total);
        return total;
    }

    //Calculo monto total de artículos en el carrito

    function totalCompra() {
        let montoTotal = 0;
        cart.forEach((item) => (montoTotal = montoTotal + (item.cantidad*item.price)));
        let ret="USD"+montoTotal.toFixed(2);
        return ret;
    }
    // Agrego las cantidades de los items comprados al carrito

    const addToCart = (item, cantidad) => {
        console.log("EL ITEM: ",cart)
        if (isInCart(item.ID)) {
            let indice = cart.findIndex(elitem=>elitem.ID===item.ID); // Localizo la posicion en el array el item a agregar 
            let articulo = cart[indice];  
            articulo.cantidad=articulo.cantidad+cantidad;  // Agrego mas unidades a ese item
            let nombre = cart[indice].name  // Esto es a los efectos del console.log
            const CarritoTemp= [...cart];  // Creo nuevo array de trabajo
            CarritoTemp.splice(indice,1,articulo);  // Sustituyo el elemento anterior por el nuevo con la nueva cantidad
            setCart([...CarritoTemp]); // Actualizo el array "principal"
            console.log("Item ", nombre," con la cantidad agregada") // Muestro por console.log el carrito con el articulo con la cantidad sumada

        } else {
            // aca agrego la cantidad seleccionada y el item nuevo
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //a ver si el producto ya está en el carrito
    const isInCart = (id) => {
   /*      console.log("ID ",id) */
        return cart.some((prod) => prod.ID === id); // Si lo encuentro retono TRUE
    };

    // Remuevo el carrito el item seleccionado
    function borroItems(ID) {
        let carritoFiltrado=cart.filter(item=>item.ID!==ID);
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