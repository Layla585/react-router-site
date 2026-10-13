import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// 4) Layout: Header, Sidebar e Footer aparecem em todas as páginas.
// O <Outlet /> é o lugar onde o conteúdo de cada página é renderizado.
function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="corpo">
        <Sidebar />

        <main className="conteudo">
          {/* 5) Suspense: mostra "Carregando..." enquanto a página lazy carrega */}
          <Suspense fallback={<p className="carregando">Carregando...</p>}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
