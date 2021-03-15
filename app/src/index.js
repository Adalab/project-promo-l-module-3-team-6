const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
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
    res.status(200).json({
      success: true,
      message: 'La tarjeta ha sido creada.',
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Faltan los siguientes datos: ' + missed.join(', '),
    });
  }
});
