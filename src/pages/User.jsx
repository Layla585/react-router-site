import { Link, useParams } from "react-router-dom";
import { usuarios } from "../data/usuarios";

// useParams lê o parâmetro :id da URL (por exemplo, /user/2 -> id = "2")
function User() {
  const { id } = useParams();
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return (
      <section>
        <h2>Usuário não encontrado</h2>
        <p>Não existe nenhum usuário com o id "{id}".</p>
        <p className="links"><Link to="/">Voltar para a Home</Link></p>
      </section>
    );
  }

  return (
    <section>
      <h2>Perfil de {usuario.nome}</h2>
      <ul className="perfil">
        <li><strong>Id:</strong> {usuario.id}</li>
        <li><strong>Cargo:</strong> {usuario.cargo}</li>
        <li><strong>Cidade:</strong> {usuario.cidade}</li>
      </ul>

      <p className="links">
        Ir para: <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </p>
    </section>
  );
}

export default User;
