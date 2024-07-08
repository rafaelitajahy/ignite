# App

GymPass style app.

## RFs (Requisitos funcionais)

- [*] Deve ser possível se cadastrar;
- [*] Deve ser possível se autenticar;
- [*] Deve ser possível obter o perfil de um usuário logado;
- [*] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [*] Deve ser possível o usuário obter o seu histórico de check-ins;
- [*] Deve ser possível o usuário buscar academias próximas;
- [*] Deve ser possível o usuário buscar academias pelo nome;
- [*] Deve ser possível o usuário realizar check-in em uma academia;
- [*] Deve ser possível validar o check-in de um usuário;
- [*] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [*] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [*] O usuário não pode fazer 2 check-ins no mesmo dia;
- [*] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [*] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

# Integrando com front-end

Caso precise integrar com o front-end, você deve ter se deparado com o refreshToken não sendo setado nos cookies do navegador, para resolver esse problema, ilustraremos a solução utilizando o Axios:

No servidor, adicione a propriedade credentials como true:

```javascrit
app.register(cors, {
  origin: true,
  credentials: true,
})
```
No create ou nas requisições do Axios, adicione o withCredentials como true:
```javascrit
const api = axios.create({
  baseURL: 'http://localhost:3333',
  withCredentials: true,
})
```