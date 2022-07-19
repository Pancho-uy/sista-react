import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
    const miURL=`/detalle/${item.id}`;
    return (
        <div className="col">
            <div className="card border-0 h-100 ">
                <div className="card-body">
                    <NavLink to={miURL}>
                        <img src={item.img} alt="imagen del articulo"></img>
                    </NavLink>
                    <p className="text-muted">{item.category}</p>
                    <h5 className="card-title">{item.name}</h5>
                    <h2>USD {item.price} IVA Inc.</h2>
                </div>
            </div>
        </div>
    )
};

export default Item;