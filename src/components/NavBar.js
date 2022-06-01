// Menú principal
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top fondoMio">
    <section class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <section class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">
              <img class= "img-fluid" src="/img/logo_menu.svg"></img> SISTA</a>
          </li>
              <li class="nav-item">
            <a class="nav-link" href="secciones/nosotros.html">¿Quiénes Somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="secciones/servicios.html">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="secciones/faq.html">F.A.Q.</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="secciones/contacto.html">Contacto</a>
          </li>
        </ul>
      </section> 
    </section> 
    </nav> 
  );
}