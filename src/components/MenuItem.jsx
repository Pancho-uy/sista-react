import { Link } from 'react-router-dom';
export default function MenuItem({titulo, destino}) {
  return (
    <li className="navbar-nav nav-item">
        <Link to= {destino} className="nav-link">{titulo}</Link>
    </li>
  )
}