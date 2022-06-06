

export default function MenuItem(item) {
  return (
    <li class="nav-item">
        <a class="nav-link" href={item.destino}>{item.titulo}</a>
    </li>
  )
}