

export default function MenuItem(item) {
  return (
    <li className="nav-item">
        <a className="nav-link" href={item.destino}>{item.titulo}</a>
    </li>
  )
}