# Desafio Fullstack - Cadastro e Login

## Descrição

Este é o projeto de um sistema de cadastro e login com autenticação, desenvolvido com as tecnologias **Django** (backend) e **Next.js** (frontend). A aplicação permite que os usuários se cadastrem e façam login para acessar o conteúdo da aplicação.

### Funcionalidades:

- **Cadastro de usuário:** Permite que novos usuários se registrem.
- **Login de usuário:** Permite que usuários já registrados façam login.
- **API RESTful:** O backend oferece uma API para manipulação de dados do usuário.
- **CORS:** Configuração para permitir requisições entre o frontend e o backend.

## Tecnologias Utilizadas

### Backend

- **Django**: Framework para desenvolvimento web.
- **Django Rest Framework**: Utilizado para criação de APIs.
- **SQLite**: Banco de dados utilizado na aplicação.

### Frontend

- **Next.js**: Framework React para desenvolvimento de interfaces de usuário.
- **React**: Biblioteca para construção de interfaces de usuário.
- **JavaScript/TypeScript**: Linguagens utilizadas no frontend.

## Como Rodar o Projeto

### Backend

1. Clone o repositório: 
   ```bash
   git clone https://github.com/catiuu/desafio-fullstack.git
2. Instale as dependências do backend:
 - Entre na pasta do backend:
     ```bash
     cd back-end
- Crie e ative o ambiente virtual:
     ```bash
     python -m venv venv
#### No Windows:
    venv\Scripts\activate
#### No macOS/Linux:
    source venv/bin/activate
- Instale as dependências:

      pip install -r requirements.txt
3. Configure o banco de dados:

- Execute as migrações:
 
      python manage.py migrate

4. Inicie o servidor backend:

        python manage.py runserver

### Frontend:

1. Clone o repositório: 
   ```bash
   git clone https://github.com/catiuu/desafio-fullstack.git
2. Instale as dependências:
- Entre na pasta do frontend:
     ```bash
     cd front-end
- Instale as dependências:

       npm install
3. Inicie o servidor frontend:
  
       npm run dev

4. Acesse a aplicação no navegador:

Acesse o frontend em: http://localhost:3000.


## Endpoints
- Cadastro
  - POST /api/register/
    - Endpoint para cadastrar novos usuários.
    - Dados esperados: username, email, password.
- Login
  - POST /api/login/
    - Endpoint para fazer login de usuários já registrados.
    - Dados esperados: username, password.
- Artigos
  - GET /api/articles/
    - Endpoint para listar todos os artigos publicados.

Este é um projeto realizado como parte de um desafio técnico e está atualmente em desenvolvimento.