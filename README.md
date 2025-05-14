# 📚 API Books – Desafio Backend com Node.js + Express + Ngrok

Este projeto é um backend simples construído com **Node.js** e **Express**, com o objetivo de gerenciar um catálogo de livros. Ele permite listar, adicionar e buscar livros de forma aproximada. Para facilitar testes externos, a API pode ser exposta publicamente utilizando **Ngrok**.


## 🚀 Funcionalidades

- Listar todos os livros em ordem alfabética (`GET /all/books`)
- Adicionar um novo livro (`POST /new/books`)
- Buscar livros por aproximação de título ou autor (`GET /books/aproximation`)


## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- Ngrok (para tunelamento)


## 💻 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-books.git
cd api-books

## 2. Instalar dependências

npm install


## 3. Iniciar o servidor local

node index.js

## A aplicação estará disponível localmente em:

http://localhost:3000 

obs: Ao rodar esse projeto em outra maquina validar se a porta 3000 está em usoe para isso usar o comando "sudo lsof -i :3000", caso esteja em uso e puder fazer a remoção dela execute " kill -9 [ID DA PORTA] ou faça a alteração no código na linha 54 app.listen(3000);
