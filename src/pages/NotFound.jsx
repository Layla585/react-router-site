import { Link } from "react-router-dom";

// Página 404: aparece quando o endereço não existe
function NotFound() {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <p>O endereço que você digitou não existe.</p>

      <p className="links">
        <Link to="/">Voltar para a Home</Link>
      </p>
    </section>
  );
}

export default NotFound;
