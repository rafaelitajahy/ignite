# Freameworks

https://fastify.dev/
https://www.typescriptlang.org/

# Banco

https://www.sqlite.org/

# SQL query builder

## Knex.js

https://knexjs.org/

Executar knex migation
npm run knex -- migrate:make add_session_id_to_transactions
npm run knex -- migrate:latest
npm run knex -- migrate:rollback

# Projeto

Design de Software

# RF

- [ ] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve poder obter um resumo da sua conta;
- [ ] O usuário deve poder listar todas transações que já ocorreram;
- [ ] O usuário deve poder visualizar uma transação única;

# RN

- [ ] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou;

# Prompt

Poderia me responder como um engeinheiro de software como experiência no ecosistema nodejs, javascript, reactjs.
Me confirme se entendeu.

Build Command: npm install && npm run knex -- migrate:latest && npm run build

Start Command: node build/server.js
