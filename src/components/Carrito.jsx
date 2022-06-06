import carrito from "../carrito.png"

export default function ElCarrito() {
  return (
    <a class="nav-link" href="/#">
        <img class="float-end" src={carrito} alt="carrito" width="32" height="32"/>
    </a>
  )
}