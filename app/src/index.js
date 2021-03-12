const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.post("/card", (req, res) => {
  const response = {
    palette: req.body.palette, //ojo que viene como string
    name: req.body.name,
    job: req.body.job,
    phone: req.body.phone,
    email: req.body.email,
    linkedin: req.body.linkedin,
    github: req.body.github,
    photo: req.body.photo,
  };
  console.log(response);
  res.json(response);
});
