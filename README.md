# Meu site com React Router

Como rodar:

1. Abra esta pasta no VS Code (File > Open Folder).
2. No terminal, dentro da pasta:

       npm install
       npm run dev

3. Abra o endereço que aparecer (algo como http://localhost:5173).

Rotas:

- /            Home
- /about       About
- /contact     Contact
- /user/:id    Perfil do usuário (exemplos: /user/1, /user/2, /user/3)
- qualquer outro endereço -> página 404

Estrutura:

- src/main.jsx                 : BrowserRouter envolvendo o App
- src/App.jsx                  : rotas (Routes e Route) e lazy loading
- src/components/Layout.jsx    : layout com Header, Sidebar, Footer, Outlet e Suspense
- src/components/Header.jsx    : links Home, About e Contact
- src/components/Sidebar.jsx   : lista de usuários
- src/components/Footer.jsx    : rodapé
- src/pages/                   : Home, About, Contact, User e NotFound
- src/data/usuarios.js         : dados de exemplo para /user/:id
- src/App.css                  : estilos
