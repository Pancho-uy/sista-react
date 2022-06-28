import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexto/Contexto';

const Cart = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <div>
                <button onClick={addToCart}>Click</button>
            </div>
        </div>
    );
};

export default Cart;