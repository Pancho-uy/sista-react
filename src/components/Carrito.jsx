import carrito from "../carrito.png"

export default function ElCarrito() {
  return (
    <>
        <a className="nav-link" href="/#">
            <img className="float-end" src={carrito} alt="carrito" width="32" height="32"/>
        </a>
    </>
  )
}