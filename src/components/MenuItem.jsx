import { NavLink } from 'react-router-dom';
export default function MenuItem({titulo, destino}) {
  return (
    <li className="navbar-nav nav-item">
        <NavLink to= {destino} className="nav-link">{titulo}</NavLink>
    </li>
  )
}