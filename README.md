# Task List

## Projeto

Este projeto consiste em uma aplicação Full Stack completa com o objetivo de ajudar no gerenciamento de atividades e tarefas.

<br>
<img align="center" src="backend/src/assets/img/1.jpeg" />
<br><br>

## Tecnologias Utilizadas

### Backend

- [NodeJS](https://nodejs.org/en/)<img align="center" alt="NodeJS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
- [Express](https://expressjs.com/)<img align="center" alt="Express" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">

### Frontend

- [HTML](https://www.w3schools.com/html/)<img align="center" alt="HTML" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
- [CSS](https://www.w3schools.com/css/)<img align="center" alt="CSS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
- [JavaScript](https://www.javascript.com/)<img align="center" alt="JavaScript" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">

### Banco de Dados

- [MySQL](https://www.mysql.com/)<img align="center" alt="MySQL" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">

<br>

## Como Usar

### 1. Clone ou baixe este repositório.

```bash
# Comando para clonar o repositório

$ git clone https://github.com/manualdodev/todolist-fullstack.git
2. Crie um banco de dados MySQL e as colunas necessárias.
bash
Copiar código
# Comando para criar um banco de dados no terminal MySQL:

$ CREATE DATABASE nome_do_banco;
3. Crie a tabela "tasks" que será utilizada pela aplicação.
bash
Copiar código
# Comando para criar a tabela com suas colunas

$ CREATE TABLE tasks(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
4. Na raiz do projeto, haverá um arquivo chamado ".env.example". Renomeie-o para ".env" e preencha os campos com os dados do seu banco de dados.
bash
Copiar código
PORT= [Porta na qual o servidor irá rodar]
MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
MYSQL_PASSWORD= [A senha que você escolheu ao instalar o MySQL]
MYSQL_DB= [O nome do banco de dados criado anteriormente.]
5. Instale as dependências (node_modules) dentro da pasta "backend".
bash
Copiar código
# Comando para baixar os 'node_modules'

$ npm install
6. Inicie o servidor (dentro da pasta "backend") e abra o arquivo "index.html".
bash
Copiar código
# Comando para iniciar o servidor

$ npm start
Isso deve cobrir todos os passos para configurar e rodar a aplicação localmente. Se tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma issue no repositório!

rust
Copiar código

Essa estrutura é padrão para um **README.md** e deve fornecer todas as instruções necessárias para quem for rodar o projeto.
