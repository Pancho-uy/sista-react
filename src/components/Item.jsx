import BotonCompra from './ItemCount';

const Item = ({ item }) => {
    return (
        <div class="col-sm">
            <div className="card">
                <div className="card-body">
                    <img src={item.img} alt="imagen del articulo"></img>
                    <h5 className="card-title">{item.name}</h5>
                    <h2>USD {item.price} IVA Inc.</h2>
                </div>
                <div className="card-footer">
                    <BotonCompra stock={item.stock} inicio={0}/>
                </div>
            </div>
        </div>
    )
};

export default Item;