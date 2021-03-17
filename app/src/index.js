const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();

const isDevEnviroment = true;

const apiUrl = isDevEnviroment
  ? 'http://localhost:3000'
  : 'https://react-huggers-cards.herokuapp.com';

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// set template engine middlewares
app.set('view engine', 'ejs');

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/data/cards.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

// static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

app.get('/card/:id', (req, res) => {
  const cardId = req.params.id;
  const query = db.prepare(`SELECT * FROM cards WHERE id=?`);
  const cardData = query.get(cardId);
  res.render('./pages/card', cardData);
});

app.post('/card', (req, res) => {
  const bodyParams = req.body;

  const missed = [];

  for (const param in bodyParams) {
    if (!bodyParams[param]) {
      missed.push(param);
    }
  }

  if (missed.length === 0) {
    const query = db.prepare(
      `INSERT INTO cards(palette, name, job, phone, email, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const cardData = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );
    console.log(req.host);
    const cardURLString = `${apiUrl}/card/${cardData.lastInsertRowid}`;
    /*     const cardURLString = `http://localhost:3000/card/${cardData.lastInsertRowid}`; */

    res.status(200).json({
      success: true,
      message: 'La tarjeta ha sido creada.',
      cardURL: cardURLString,
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Faltan los siguientes datos: ' + missed.join(', '),
    });
  }
});
