# 🛠️ Backend de Sistema de Chamados – Resumo Completo
## 📁 Organização de Pastas (Estrutura Sugerida)

```plaintext
src/
├── controllers/     # Funções que processam as requisições e respostas
├── middlewares/     # Funções intermediárias (ex: autenticação, validação)
├── prisma/          # Configuração e schema do Prisma (ex: client.ts, schema.prisma)
├── routes/          # Definição das rotas da API
├── services/        # Lógica de negócio reutilizável
└── utils/           # Funções auxiliares (ex: gerar token, hash de senha)


## 🔐 JWT (JSON Web Token)
JWT é um token que o backend gera após o login. O token serve como “crachá” digital que o frontend envia nas requisições para acessar rotas protegidas.

### Como funciona:
1. Usuário faz login → backend valida → gera JWT.
2. Frontend armazena esse token (ex: localStorage).
3. Em toda requisição protegida, o token vai no **header**:  
   `Authorization: Bearer <seu_token>`.
4. Middleware valida esse token antes de liberar o acesso.

## 🧠 Middleware
Middlewares são funções intermediárias que atuam antes do controller.  
Servem para:
- Verificar se o token JWT é válido
- Validar inputs
- Proteger rotas por tipo de usuário (admin, técnico)

## ⚙️ Controllers
Controllers são responsáveis por:
- Receber a requisição
- Validar os dados
- Chamar um service se necessário
- Retornar uma resposta

Cada rota geralmente aponta para uma função controller.

## 📦 Services
Services armazenam a **lógica de negócio**.  
Exemplos:
- Criar um chamado
- Atualizar o status
- Enviar notificação
- Atribuir técnico

## 🔁 Rotas da Aplicação

### 🔒 Autenticação
- `POST /register` → Criar usuário
- `POST /login` → Autenticar e gerar JWT

### 🙋‍♂️ Usuário Comum
- `POST /chamados` → Criar chamado
- `GET /chamados` → Listar seus chamados
- `GET /chamados/:id` → Ver detalhes

### 🧰 Técnico/Admin
- `GET /todos-chamados` → Listar todos
- `PATCH /chamados/:id/status` → Atualizar status
- `POST /chamados/:id/comentarios` → Adicionar comentário

### 🧾 Serviços (Admin)
- `POST /servicos` → Criar serviço
- `GET /servicos` → Listar serviços
- `DELETE /servicos/:id` → Remover serviço

## 🧱 Models no Prisma (MongoDB)

### Modelo User
```ts
model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String   @unique
  password  String
  role      Role
  chamados  Chamado[]
}

model Chamado {
  id         String      @id @default(auto()) @map("_id") @db.ObjectId
  titulo     String
  descricao  String
  status     Status
  user       User        @relation(fields: [userId], references: [id])
  userId     String      @db.ObjectId
  tecnicoId  String?     @db.ObjectId
  servicoId  String?     @db.ObjectId
  comentarios Comentario[]
  anexos     Anexo[]
}

model Servico {
  id       String     @id @default(auto()) @map("_id") @db.ObjectId
  nome     String
  chamados Chamado[]
}

model Comentario {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  texto     String
  chamado   Chamado  @relation(fields: [chamadoId], references: [id])
  chamadoId String   @db.ObjectId
  autor     User     @relation(fields: [autorId], references: [id])
  autorId   String   @db.ObjectId
}

model Anexo {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  url       String
  nome      String
  tipo      String
  chamado   Chamado  @relation(fields: [chamadoId], references: [id])
  chamadoId String   @db.ObjectId
}

enum Role {
  USER
  TECHNICIAN
  ADMIN
}

enum Status {
  ABERTO
  ANDAMENTO
  RESOLVIDO
  CANCELADO
}
