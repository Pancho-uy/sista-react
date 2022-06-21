// Menú principal
import { Link } from "react-router-dom";
import logo from "../logo_menu.png";
import ElCarrito from "./Carrito.jsx";
import MenuItem from "./MenuItem";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top fondoMio">
        <section className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <img src={logo} alt="logo"/></Link><strong style={{color : "white"}}>SISTA</strong>
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
