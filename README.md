# Sistema de Suporte Técnico

## 💪 Visão Geral

O **Sistema de Suporte Técnico** é uma aplicação web full stack criada para gerenciar solicitações de suporte técnico de forma ágil, moderna e responsiva. Ele permite que usuários registrem chamados, técnicos acompanhem a resolução e admins tenham controle completo dos dados e usuários.

> Projeto desenvolvido por **Davi Peterson** e **@willsx69**

---

## 🚀 Tecnologias Utilizadas

### Front-end:

* **HTML5** — estrutura semântica da aplicação
* **Tailwind CSS** — estilização utilitária e responsiva
* **JavaScript (Vanilla)** — lógica da interface e integração com o backend

### Back-end:

* **Node.js + JavaScript** — execução da lógica de servidor
* **Prisma ORM** — acesso ao banco de dados com segurança e tipagem

### Banco de dados:

* **PostgreSQL** (ou outro, a definir com Prisma)

---

## 🧩 Estrutura do Projeto

```bash
/suporte-tecnico
│
├── /frontend
│   ├── index.html
│   ├── /assets
│   ├── /pages
│   └── main.js
│
├── /backend
│   ├── server.js
│   ├── /controllers
│   ├── /routes
│   ├── /prisma
│   └── /middleware
│
├── /docs
│   └── README.md
│
└── package.json
```

---

## 📌 Funcionalidades Previstas

### Usuário (cliente):

* [ ] Cadastro e login
* [ ] Abertura de chamados
* [ ] Visualização do status de seus chamados
* [ ] Comentários ou feedback sobre atendimentos

### Técnico:

* [ ] Acesso à lista de chamados atribuídos
* [ ] Atualização do status (pendente, em andamento, resolvido)
* [ ] Resposta direta aos chamados

### Administrador:

* [ ] Painel de gestão de usuários
* [ ] Visualização de métricas (chamados abertos, por categoria, SLA)
* [ ] Criação de categorias e perfis de técnicos

---

## 🔐 Autenticação e Autorização

* Sistema de login baseado em JWT
* Diferenciação de permissões: usuário comum, técnico e admin

---

## 🛠️ Como Rodar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/drax-dev173/suporte-tecnico.git
```

2. Instale as dependências:

```bash
cd suporte-tecnico
npm install
```

3. Configure o banco de dados e Prisma:

```bash
npx prisma init
# edite o arquivo .env com as credenciais do DB
npx prisma migrate dev --name init
```

4. Rode o servidor:

```bash
npm run dev
```

---

## 🗓️ Roadmap Detalhado

### 🧱 Fase 1 – Setup e Base do Projeto

* [x] Estruturação do repositório e pastas (`/frontend`, `/backend`)
* [x] Configuração do Tailwind CSS
* [x] Inicialização do projeto Node.js e Prisma ORM
* [x] Conexão com banco de dados e migração inicial
* [ ] Criação de sistema de rotas no backend
* [ ] Setup de ambiente `.env` e variáveis seguras

### 🔐 Fase 2 – Autenticação

* [ ] Cadastro de usuário (cliente, técnico, admin)
* [ ] Login e geração de JWT
* [ ] Middleware de proteção por tipo de usuário
* [ ] Validação de sessão no front-end

### 🛠️ Fase 3 – CRUD de Chamados

* [ ] Formulário de abertura de chamado
* [ ] Listagem de chamados do usuário logado
* [ ] Visualização e atualização de chamado por técnicos
* [ ] Histórico e status dos chamados

### 📊 Fase 4 – Painéis e Dashboard

* [ ] Painel técnico: lista de chamados atribuídos
* [ ] Painel admin: métricas, gráficos e gestão de usuários
* [ ] Filtros por status, data e categoria

### 🎨 Fase 5 – Front-end UX/UI

* [ ] Responsividade mobile
* [ ] Layout limpo com feedback visual
* [ ] Notificações de status (toasts/alerts)
* [ ] Página de erro e loading states

### 🚀 Fase 6 – Deploy & Documentação

* [ ] Deploy do backend (Railway ou Render)
* [ ] Deploy do frontend (Vercel)
* [ ] Documentação técnica da API
* [ ] Readme com instruções de uso

---

## 👥 Autores

* [Davi Peterson](https://github.com/drax-dev173)
* [@willsx69](https://github.com/willsx69)
