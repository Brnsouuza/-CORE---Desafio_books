const express = require('express'); /*Importa o framework Express, que facilita a criação de servidores e rotas em Node.js.*/
const app = express(); /*Cria uma instância do servidor Express, que será usada para definir as rotas */

app.use(express.json()); /* Falo para o express entender dados em JSON que é enviado na requisição POST. */
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Requisição recebida: ${req.method} ${req.url}`);
    next();
});
const books = [ /* Uma lista de livros dentro de um array de objt com nome de livros e autor, basicamente simula um banco */
  { titulo: "O Código Da Vinci", autor: "Dan Brown" },
  { titulo: "Garota Exemplar", autor: "Gillian Flynn" },
  { titulo: "Como Fazer Amigos e Influenciar Pessoas", autor: "Dale Carnegie" },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen" },
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
  { titulo: "A Culpa é das Estrelas", autor: "John Green" },
  { titulo: "O Poder do Hábito", autor: "Charles Duhigg" },
  { titulo: "A Sutil Arte de Ligar o F*da-se", autor: "Mark Manson" },
  { titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris" },
  { titulo: "As Aventuras de Huckleberry Finn", autor: "Mark Twain" }
];

app.get('/all/books', function (req, res) { /* Tota GET que trará todos os livros da memoria e os que estão dentro do array */
    const sortedBooks = [...books].sort((a, b) => a.titulo.localeCompare(b.titulo)); /* Essa const tem a função de deixar a resposta GET em ordem alfabética */
    res.json(sortedBooks); /*Retorno em json*/
});

app.post('/new/books', (req, res) => { /* Rota POST para gerar novos livros dentro d amemoria flahs do meu host*/
    const { titulo, autor } = req.body; /* Ao colocar novos livros é necessário a presnete no json.body o titulo e autor*/

    if (!titulo || !autor) { /* Coloque essa codição if para determinar que se não tiver autor ou (||) não tiver titulo o retorno será 400 */
        return res.status(400).json({ error: "Título e autor são obrigatórios." });
    }

    const newBook = { titulo, autor }; /* Nesse ponto é após é inserido o novo livro com um retorno 201 created*/
    books.push(newBook);

    res.status(201).json({ message: "Livro adicionado com sucesso!", book: newBook });
});

app.get('/books/aproximation', function (req, res) { /* Um GET por aproximação de busca, onde na url que chamará o banco deverá conter ?query= {nome ou aproximação de}*/
    const query = req.query.query; // Passar a query na url ?query= é necessário para que o servidor consiga entender o que está sendo buscado

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro de busca "query" é obrigatório.' }); /* Caso não seja passado o parâmetro de busca, retorna um erro 400 */
    }

    const resultadobook = books.filter(book => /*Filtro para que o servidor busque o está mais próximo da solicitação, deixei tudo em lowcase sem frescura*/
        book.titulo.toLowerCase().includes(query.toLowerCase()) ||
        book.autor.toLowerCase().includes(query.toLowerCase())
    );

    const sortedBooks = resultadobook.sort((a, b) => a.titulo.localeCompare(b.titulo)); /* Ordena os livros filtrados em ordem alfabética pelo título */
    res.json(sortedBooks); /* Retorno em json com os livros encontardos por aproximação */

});


app.listen(3000); /* Servidor local escuta na porta 3000 e ao ser inciado tem uma mensagem no console */
console.log(`Backend para testa no desafio api-books`);