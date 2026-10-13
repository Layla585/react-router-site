import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>Esta página fala sobre o projeto: um site simples com várias páginas, layout compartilhado e carregamento sob demanda.</p>

      <p className="links">
        Ir para: <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
      </p>
    </section>
  );
}

export default About;
