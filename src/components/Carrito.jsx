import carrito from "../carrito.png"

export default function ElCarrito() {
  return (
    <>
        <span className="text-white">0</span>
        <a className="nav-link" href="/#">
            <img className="float-end" src={carrito} alt="carrito" width="32" height="32"/>
        </a>
    </>
  )
} 