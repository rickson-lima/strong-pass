# PROJETO INTEGRADO UNINORTE - SENHA ROBUSTA

## GUIA DE INSTALAÇÃO DA API

### PRÉ REQUISITOS
1. [MYSQL WORKBENCH](https://dev.mysql.com/downloads/workbench/ "Download MySQL Workbench")
2. [NODEJS](https://nodejs.org/en/download/releases/ "Download NodeJS Versão 14.15.4")

### GUIA
1. Executar o comando **"npm install"** para instalar as dependencias;
2. Criar um novo usuário no **Workbench** com todas as permissões;
3. Criar um cópia do arquivo **".env.simple"** e renomear para **".env"**;
4. Criar um novo **SCHEMA** no workbench com o nome que desejar;
5. Preencher os dados do arquivo **".env"** com o **host, user, password e database** do Workbench;
6. Executar o comando **"npm run knex:migrate"** para criar as tabelas no banco de dados;
7. Executar o comandoo **"npm run knex:seed"** para preencher dados da tabela;
8. Executar o comando **"npm run dev"** para executar a API;

### OBSERVAÇÕES
1. As rotas estão em **"routes.ts"**;
