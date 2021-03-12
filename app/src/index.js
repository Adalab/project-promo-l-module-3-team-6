const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});
