// Menú categorias
import { Link } from "react-router-dom";

const margenSup = {
  margin: "7%"
}
/* ver video 1:56:47 */
export default function NavBar() {
  return (
    <>
    <div className="container-fluid" style={margenSup}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top fondoMio" style={margenSup}>
        <section className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link to="/category/:catID"> Routers c/WIFI </Link>
              </li>
              <li>
                <Link to="/category/:catID"> Routers s/WIFI </Link>
              </li>
              <li>
                <Link to="/category/:catID"> AP 5Ghz </Link>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </div>
    </>
  );
}