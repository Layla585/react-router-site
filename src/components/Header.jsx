import { NavLink } from "react-router-dom";

// 7) Header com links para Home, About e Contact.
// O NavLink adiciona a classe "ativo" no link da página atual.
function Header() {
  function classe({ isActive }) {
    return isActive ? "ativo" : "";
  }

  return (
    <header className="header">
      <h1 className="logo">Meu Site</h1>
      <nav className="menu">
        <NavLink to="/" end className={classe}>Home</NavLink>
        <NavLink to="/about" className={classe}>About</NavLink>
        <NavLink to="/contact" className={classe}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
