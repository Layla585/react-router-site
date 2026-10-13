import { Link } from "react-router-dom";
import { usuarios } from "../data/usuarios";

// Sidebar compartilhada: lista os perfis de usuário (rota /user/:id)
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Usuários</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            <Link to={`/user/${u.id}`}>{u.nome}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
