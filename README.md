# Livraria

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexjuniorarruda/Accounts/blob/main/LICENSE)

 Nessa aplicação é possivel fazer o cadastro de livros referenciando os autores e os assuntos(um livro pode ter um ou mais de ambos). Abaixo explico um pouco mais da aplicação.

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

- Executar o projeto
  
```
npm start
```

# Autor

Alex Junior Arruda

https://www.linkedin.com/in/alex-jr-arruda/
