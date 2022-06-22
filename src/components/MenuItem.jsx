import { Link } from 'react-router-dom';
export default function MenuItem(item) {
  return (
    <li className="nav-item">
        <Link to= {item.destino} className="nav-link">{item.titulo}</Link>
    </li>
  )
}