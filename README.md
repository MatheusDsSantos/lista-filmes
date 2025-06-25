Aplicação Single Page desenvolvida com React para anotar filmes e séries que você deseja assistir. Permite múltiplos usuários e funciona 100% no navegador com dados salvos localmente.

🔍 Funcionalidades

✅ Tela de login simples (por nome)
✅ Anotar título, ano, motivo e data de adição
✅ Lista de filmes/séries por usuário
✅ Persistência no localStorage
✅ Remoção de filmes adicionados
✅ Exportação e importação de dados (.json)
✅ Navegação com React Router (SPA)

🚀 Como usar

1. Clone o repositório ou extraia o .zip:
   npm install
   npm run dev

2. Acesse no navegador:
   http://localhost:5173

3. Digite seu nome para entrar. Os dados são salvos com base no nome de usuário informado.

📦 Importação e Exportação de Dados

Na tela de login, é possível:

- Exportar seus dados salvos como arquivo .json
- Importar dados anteriores ou transferir entre navegadores

Importações substituem chaves com o mesmo nome de usuário.

🛠️ Tecnologias

- React 18
- React Router DOM
- TailwindCSS
- Framer Motion
- localStorage para persistência

🗂️ Estrutura de Pastas

src/
├── App.jsx
├── main.jsx
├── index.css
├── routes/
│   ├── Login.jsx
│   └── Watchlist.jsx
├── components/
│   ├── AddMovieForm.jsx
│   ├── MovieTable.jsx
│   └── ui/
│       ├── button.jsx
│       └── card.jsx

📁 Dados

As informações são armazenadas com as chaves:

- watchlist_current_user — Nome do usuário logado
- watchlist_movies_<nome> — Lista de filmes daquele usuário
