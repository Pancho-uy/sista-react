// Menú principal
import logo from "../logo_menu.png";
import carrito from "../carrito.png";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top fondoMio">
        <section class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <section class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">
                  <img src={logo} alt="logo"/></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categorias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ofertas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">F.A.Q.</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>              
            </ul>
          </section>
          <section>
            <a class="nav-link" href="../secciones/carrito.html">
              <img class="float-end" src={carrito} alt="carrito" width="32" height="32"/>
            </a>
        </section>
        </section>
      </nav>
    </>
  );
}