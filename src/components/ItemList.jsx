import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div class="row">
  {/*           <div className="card-check"> */}
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
{/*             </div> */}
        </div>

    );
};

export default ItemList;