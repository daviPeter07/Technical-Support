# Sistema de Suporte Técnico

## 💪 Visão Geral

O **Sistema de Suporte Técnico** é uma aplicação web full stack criada para gerenciar solicitações de suporte técnico de forma ágil, moderna e responsiva. Ele permite que usuários registrem chamados, técnicos acompanhem a resolução e admins tenham controle completo dos dados e usuários.

> Projeto desenvolvido por **Davi Peterson**, **William Breno** e **Raquel Alencar**

---

## 🚀 Tecnologias Utilizadas

## Ux Design
* **FIGMA** — interface visual responsiva para desktop e mobile

### Front-end:

* **HTML5** — estrutura semântica da aplicação
* **Tailwind CSS** — estilização utilitária e responsiva
* **JavaScript** — lógica da interface e integração com o backend

### Back-end:

* **Node.js** — execução da lógica de servidor
* **Prisma ORM** — acesso ao banco de dados com segurança e tipagem

### Banco de dados:

* **MongoDB**

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
cd sistemaNome
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

## 👥 Autores

* [Davi Peterson](https://github.com/daviPeter07)
* [William Breno](https://github.com/willsx69)
* [Raquel Alencar](https://github.com/allwendys)
