import React from 'react';
import ElSaludo from './ElSaludo';
import Item from './Item';

const ItemList = ({aviso, items }) => {
    console.log(items);
    return (
        <>
            <div class="row">
                <ElSaludo saludo={aviso}/>
            </div>
            <div class="row">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};
export default ItemList; 