import { Link } from "react-router-dom";

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Entre em contato pelo email contato@exemplo.com.</p>

      <p className="links">
        Ir para: <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </p>
    </section>
  );
}

export default Contact;
