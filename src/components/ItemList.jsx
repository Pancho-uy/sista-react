import React from 'react';
import ElSaludo from './ElSaludo';
import Item from './Item';

const ItemList = ({aviso, items }) => {
    return (
        <>
            <div className="row">
                <ElSaludo saludo={aviso}/>
            </div>
            <div className="row">
                {items.map((items) => (
                    <Item key={items.id} item={items} />
                ))}
            </div>
        </>
    );
};
export default ItemList; 