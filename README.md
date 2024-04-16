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

Primeiramente fazer download do projeto, abrir o mesmo no terminal e executar o comando abaixo para instalar as dependências:

```
npm install
```

Depois renomear o arquivo .env.example para .env e inserir o **usuário**, **senha** e **endereço** para a criação do banco de dados, abaixo um exemplo de configuração do arquivo .env:

```
DB_NAME=livrariadb
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
```

Para executar o projeto rodar o comando abaixo no terminal:

```
npm run start
```

Após rodar esse comando o banco e as tabelas serão criados, 
