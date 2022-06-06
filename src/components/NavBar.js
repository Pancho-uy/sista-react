// Menú principal
import logo from "../logo_menu.png";
import ElCarrito from "./Carrito.jsx";
import MenuItem from "./MenuItem";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top fondoMio">
        <section class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <section class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <img src={logo} alt="logo"/><strong>SISTA</strong></a>
              </li>
              <MenuItem titulo="Artículos" destino ="/#"/>
              <MenuItem titulo="Ofertas" destino ="/#"/>
              <MenuItem titulo="F.A.Q." destino ="/#"/>
              <MenuItem titulo="Contacto" destino ="/#"/>
              <MenuItem titulo="Login" destino ="/#"/>
            </ul>
          </section>
          <section>
           <ElCarrito/>
        </section>
        </section>
      </nav>
    </>
  );
}
