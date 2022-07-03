import { NavLink } from "react-router-dom";

const Item = ({ item }) => {
    const miURL=`/detalle/${item.ID}`;
    return (
        <div class="col">
            <div className="card h-100 ">
                <div className="card-body">
                    <NavLink to={miURL}>
                        <img src={item.img} alt="imagen del articulo"></img>
                    </NavLink>
                    <h5 className="card-title">{item.name}</h5>
                    <h2>USD {item.price} IVA Inc.</h2>
                </div>
            </div>
        </div>
    )
};

export default Item;