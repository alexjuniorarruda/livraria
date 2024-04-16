# Livraria

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexjuniorarruda/Accounts/blob/main/LICENSE)

 Nessa aplicação é possivel fazer o cadastro de livros referenciando os autores e os assuntos, e também gerar um relatório dos livros cadastrados. Abaixo apresento um pouco mais desse projeto.

 ### Tecnologias Utilizadas
 
 * [Nodejs](https://nodejs.org/en)
 * [MySQL](https://www.mysql.com/)
 * [Insomnia](https://insomnia.rest/)

## Dependências e Versões Necessárias

 * dotenv: 16.4.5
 * express: 4.18.3
 * express-validator: 7.0.1
 * mysql2: 3.9.2
 * pdfmake: 0.2.10
 * sequelize: 6.37.1
 * swagger-ui-express: 5.0.0

## Como rodar o projeto ✅

- Fazer download do repositório
- Abrir o projeto no terminal
- Instalar as dependencias com o comando
  
```
npm install
```

- Renomear o arquivo .env.example para .env e colocar as sequintes informações (DB_USER, DB_PASSWORD e DB_HOST fica a critério)
  
```
DB_NAME=livrariadb
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
```

- Criar o banco de dados com o comando
  
```
npx sequelize-cli db:create
```

- Popular o banco através do Seed com o comando

```
npx sequelize-cli db:seed:all
``` 

- Executar o projeto
  
```
npm start
```

## 📌 Rotas

- Visão geral de toda a documentação

![Doc Resumido](https://github.com/alexjuniorarruda/livraria/assets/112874423/80a63e5e-b41c-4dfa-af9b-5c3c87f366c4)

A aplicação possui três rotas, **assuntos**, **autores** e **livros**. Para cadastrar o livros precisamos de pelo menos um assunto e um autor cadastrado.
Se trata de uma relação **Many-to-Many**, onde um livro pode ter um ou muitos assuntos, e também pode ter um ou muitos autores.
Em cada rota é possível fazer o processo de CRUD completo.

- Schemas

![Schema](https://github.com/alexjuniorarruda/livraria/assets/112874423/bd454e0a-a995-4dac-9716-f1146096fb93)

- Rota Assuntos

![Rota Assuntos](https://github.com/alexjuniorarruda/livraria/assets/112874423/9e110df9-1263-462a-b187-6c218fbc604b)

- Rota Autores

![Rota Autores](https://github.com/alexjuniorarruda/livraria/assets/112874423/f158e5b8-eb77-4868-9f31-cec95c71aaf0)

- Rota Livros

![Rota Livros](https://github.com/alexjuniorarruda/livraria/assets/112874423/54914569-4ecc-4775-b7a6-61df01e9c4e0)

- Vale destacar também a rota **/livros/relatorio** onde é gerado um relatório contendo os livros cadastrados puxando da tabela livros relacionando com as tabelas assuntos e autores.

![Relatorio Livros](https://github.com/alexjuniorarruda/livraria/assets/112874423/f1d49e41-7ef7-455b-8e3a-d0d0c5fd69f6)

# Autor

Alex Junior Arruda

https://www.linkedin.com/in/alex-jr-arruda/
