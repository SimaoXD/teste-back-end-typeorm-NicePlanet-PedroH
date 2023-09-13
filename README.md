🌱 Monitoramento de Produtores e Propriedades

Esta aplicação foi desenvolvida para monitorar produtores e propriedades, oferecendo recursos essenciais como cadastro de stakeholders (usuários), gerenciamento de produtores e autenticação.

🖥️ Tecnologias Utilizadas
As principais tecnologias e bibliotecas usadas incluem:

diff
Copy code

- TypeScript
- Express.js
- MySQL
- TypeORM
- Bcrypt.js
- JSON Web Tokens (JWT)
- Dotenv
- Zod
- E outras bibliotecas auxiliares: cors, express-async-errors, etc.
  🔧 Requisitos
  diff
  Copy code
- Node.js
- MySQL
- npm (gerenciamento de pacotes)
  🚀 Instalação e Configuração
  bash
  Copy code

# Clone o Repositório

$ git clone https://github.com/SimaoXD/teste-back-end-NicePlanet

# Navegue até o diretório

$ cd teste-back-end-NicePlanet

# Instale as Dependências

$ npm install
📌 Funcionalidades
diff
Copy code

- Cadastro de stakeholders (usuários)
- Autenticação de usuários
- Gerenciamento de produtores
  🛠️ Comandos Úteis
  bash
  Copy code

# Para iniciar o servidor em modo de desenvolvimento

$ npm run dev:server

# Para compilar o TypeScript

$ npm run build

# Para rodar migrações do TypeORM

$ npm run typeorm migration:run
🚩 Rotas da Aplicação
bash
Copy code

# Usuários (Stakeholders)

- POST /usuario: Cadastra um novo stakeholder
- GET /usuario: Retorna a lista de stakeholders
- DELETE /usuario: Deleta um stakeholder específico

# Login

- POST /login: Autentica um usuário

# Produtor

- POST /produtor: Cadastra um produtor
- DELETE /produtor/:id: Deleta um produtor pelo ID
