const express = require('express');
const app = express();

app.use(express.json());

const books = [
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

app.get('/all/books', function (req, res) {
    const sortedBooks = [...books].sort((a, b) => a.titulo.localeCompare(b.titulo));
    res.json(sortedBooks);
});

app.post('/new/books', (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) {
        return res.status(400).json({ error: "Título e autor são obrigatórios." });
    }

    const newBook = { titulo, autor };
    books.push(newBook);

    res.status(201).json({ message: "Livro adicionado com sucesso!", book: newBook });
});

app.get('/books/aproximation', function (req, res) {
    const query = req.query.query; // Passar a query na url ?query=

    if (!query) {
        return res.status(400).json({ error: 'Parâmetro de busca "query" é obrigatório.' });
    }

    const resultadobook = books.filter(book =>
        book.titulo.toLowerCase().includes(query.toLowerCase()) ||
        book.autor.toLowerCase().includes(query.toLowerCase())
    );

    const sortedBooks = resultadobook.sort((a, b) => a.titulo.localeCompare(b.titulo));
    res.json(sortedBooks);
    });


app.listen(3000);
console.log(`Backend para testa no desafio api-books`);