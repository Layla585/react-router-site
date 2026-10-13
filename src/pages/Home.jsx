import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Home</h2>
      <p>Bem-vinda ao meu site! Este projeto usa React Router para navegar entre páginas.</p>

      <p className="links">
        Ir para: <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </p>
    </section>
  );
}

export default Home;
