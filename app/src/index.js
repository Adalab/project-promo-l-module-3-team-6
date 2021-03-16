const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// set template engine middlewares
app.set('view engine', 'ejs');

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

// static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

app.post('/card', (req, res) => {
  const bodyParams = req.body;

  const missed = [];

  for (const param in bodyParams) {
    if (!bodyParams[param]) {
      missed.push(param);
    }
  }

  if (missed.length === 0) {
    res.status(200).json({
      success: true,
      message: 'La tarjeta ha sido creada.',
      cardURL: 'provisional',
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Faltan los siguientes datos: ' + missed.join(', '),
    });
  }
});

/* app.get('/all-books', (req, res) => {
  const query = db.prepare(`SELECT name FROM books ORDER BY price DESC`);
  const books = query.all();
  res.json(books);
}); */

/* 
app.post('/new-book/', (req, res) => {
  const query = db.prepare(
    `INSERT INTO books(name, author, price, stock, printable) VALUES (?, ?, ?, ?, ?)`
  );
  const book = query.run(
    req.body.name,
    req.body.author,
    req.body.price,
    req.body.stock,
    req.body.printable
  );
  res.json({
    result: 'Book created',
    bookID: book.lastInsertRowid,
  });
}); */
/* 
app.get('/es/film:filmId.html', (req, res) => {
  // get film data
  const filmData = films.find((film) => film.id === req.params.filmId);
  console.log('film data', filmData);

    res.render('pages/film-not-found');
  }
}); */
