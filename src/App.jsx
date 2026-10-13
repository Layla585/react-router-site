import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// 5) Lazy loading: cada página só é baixada quando o usuário acessa a rota
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const User = lazy(() => import("./pages/User"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      {/* Layout comum (Header, Sidebar e Footer) para todas as páginas */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* 6) Rota com parâmetro de URL: /user/1, /user/2... */}
        <Route path="user/:id" element={<User />} />

        {/* 6) Rota inválida: qualquer endereço que não existe cai aqui (404) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
